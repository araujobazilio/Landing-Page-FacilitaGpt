import React, { useState, useEffect } from 'react';
import { Play, CheckCircle, Star, Users, Clock, Shield, ArrowRight, Menu, X, MessageCircle, Zap, Target, Gift, Phone, Mail } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ minutes: 9, seconds: 40 });

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const whatsappLink = "https://w.app/facilitagpt";

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img src="/logo.png" alt="FacilitaGPT" className="h-10 w-auto" />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 font-medium">Início</a>
              <a href="#problemas" className="text-gray-700 hover:text-blue-600 font-medium">Problemas Resolvidos</a>
              <a href="#como-funciona" className="text-gray-700 hover:text-blue-600 font-medium">Como Funciona</a>
              <a href="#beneficios" className="text-gray-700 hover:text-blue-600 font-medium">Benefícios</a>
              <a href="#depoimentos" className="text-gray-700 hover:text-blue-600 font-medium">Depoimentos</a>
              <a href="#oferta" className="text-gray-700 hover:text-blue-600 font-medium">Oferta Especial</a>
            </nav>

            {/* WhatsApp Button */}
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              <MessageCircle size={20} className="mr-2" />
              WhatsApp
            </a>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <a href="#inicio" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Início</a>
                <a href="#problemas" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Problemas Resolvidos</a>
                <a href="#como-funciona" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Como Funciona</a>
                <a href="#beneficios" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Benefícios</a>
                <a href="#depoimentos" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Depoimentos</a>
                <a href="#oferta" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Oferta Especial</a>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors mx-3"
                >
                  <MessageCircle size={20} className="mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Revolucione Seu Atendimento:
            <span className="text-blue-600 block">IA que Entende e Responde</span>
            como um Humano no WhatsApp!
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
            O único chatbot que entende áudio, texto e imagem, responde instantaneamente 
            e fecha vendas no automático – sem mensalidades caras, sem limite de uso e 
            sem complicações técnicas!
          </p>
          
          {/* Price Highlight */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8 max-w-md mx-auto border-4 border-yellow-400">
            <div className="text-red-500 text-lg line-through mb-2">De R$497,00</div>
            <div className="text-4xl font-bold text-green-600 mb-2">Por apenas R$197,00!</div>
            <div className="text-blue-600 font-semibold mb-2">💳 Pagamento único - sem mensalidades!</div>
            <div className="text-orange-600 font-semibold">Você economiza R$300,00!</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors flex items-center justify-center"
            >
              <MessageCircle className="mr-2" size={20} />
              ✅ Adquira Agora com Pagamento Único!
            </a>
          </div>

          {/* Video Section */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <iframe 
                width="100%" 
                height="400" 
                src="https://www.youtube.com/embed/MjFdBlhfJBE" 
                title="FacilitaGPT demonstração - Facilita GPT" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section id="problemas" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Problemas que o FacilitaGPT Elimina
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-red-50 p-8 rounded-xl border-l-4 border-red-500">
              <div className="text-red-600 text-4xl mb-4">❌</div>
              <p className="text-gray-700 font-medium">
                Perdendo clientes porque demora para responder mensagens no WhatsApp?
              </p>
            </div>

            <div className="bg-red-50 p-8 rounded-xl border-l-4 border-red-500">
              <div className="text-red-600 text-4xl mb-4">😰</div>
              <p className="text-gray-700 font-medium">
                Sobrecarregado com mensagens que não consegue responder a tempo?
              </p>
            </div>

            <div className="bg-red-50 p-8 rounded-xl border-l-4 border-red-500">
              <div className="text-red-600 text-4xl mb-4">📉</div>
              <p className="text-gray-700 font-medium">
                Atendimento inconsistente que prejudica sua marca e vendas?
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">O FacilitaGPT é a Solução Definitiva!</h3>
            <p className="text-lg">
              Com tecnologia de Inteligência Artificial de ponta, ele responde automaticamente 
              seus clientes, tira dúvidas, fecha vendas e atende 24 horas por dia, sem precisar de você!
            </p>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="como-funciona" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Como Funciona? É Simples!
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Diferente de outras soluções: SEM mensalidade, SEM complicações técnicas, SEM limite de uso!
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Configuração em Minutos</h3>
              <p className="text-gray-600">
                Instale com apenas alguns cliques - sem conhecimentos técnicos necessários
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Atendimento Inteligente</h3>
              <p className="text-gray-600">
                O FacilitaGPT conversa como um humano e entende contexto
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Vendas Automáticas</h3>
              <p className="text-gray-600">
                Ele responde dúvidas, convence clientes e fecha vendas sozinho
              </p>
            </div>
          </div>

          <div className="mt-12">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors inline-flex items-center"
            >
              <MessageCircle className="mr-2" size={20} />
              📲 Clique e Garanta o Seu Agora!
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Benefícios Exclusivos que Transformam seu Negócio
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center bg-green-50 p-4 rounded-lg">
              <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
              <span className="text-gray-700">Atendimento 24h/7d sem interrupções</span>
            </div>
            <div className="flex items-center bg-green-50 p-4 rounded-lg">
              <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
              <span className="text-gray-700">Entende Áudio, Texto e Imagem no WhatsApp</span>
            </div>
            <div className="flex items-center bg-green-50 p-4 rounded-lg">
              <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
              <span className="text-gray-700">Personalizável para seu negócio em minutos</span>
            </div>
            <div className="flex items-center bg-green-50 p-4 rounded-lg">
              <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
              <span className="text-gray-700">Não precisa de conhecimento técnico</span>
            </div>
            <div className="flex items-center bg-green-50 p-4 rounded-lg">
              <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
              <span className="text-gray-700">Aumenta conversões e vendas automaticamente</span>
            </div>
            <div className="flex items-center bg-green-50 p-4 rounded-lg">
              <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
              <span className="text-gray-700">Pagamento único – Sem mensalidades caras</span>
            </div>
            <div className="flex items-center bg-green-50 p-4 rounded-lg">
              <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
              <span className="text-gray-700">Pode ser revendido – Gere renda extra!</span>
            </div>
          </div>

          {/* Target Audience */}
          <div className="bg-blue-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Quem Pode Revolucionar seu Atendimento com o FacilitaGPT?
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center">
                <CheckCircle className="text-blue-500 mr-3" size={20} />
                <span className="text-gray-700">Empresários e Pequenos Negócios</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-blue-500 mr-3" size={20} />
                <span className="text-gray-700">Lojas Online e E-commerce</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-blue-500 mr-3" size={20} />
                <span className="text-gray-700">Nutricionistas, Dentistas e Médicos</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-blue-500 mr-3" size={20} />
                <span className="text-gray-700">Agências de Marketing Digital</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-blue-500 mr-3" size={20} />
                <span className="text-gray-700">Prestadores de Serviço</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-blue-500 mr-3" size={20} />
                <span className="text-gray-700">Qualquer pessoa que quer vender mais!</span>
              </div>
            </div>
          </div>

          <div className="bg-red-100 border-l-4 border-red-500 p-6 rounded-lg mb-8">
            <p className="text-red-700 font-semibold text-lg">
              Não fique para trás! Seus concorrentes já estão usando IA para automatizar o WhatsApp!
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            O Que Nossos Clientes Estão Dizendo
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Antes eu perdia vendas por não conseguir responder todos os clientes. 
                Agora o FacilitaGPT atende 24h e já fechou mais de 30 vendas no automático!"
              </p>
              <div className="font-semibold text-gray-900">- João Silva</div>
              <div className="text-sm text-gray-600">E-commerce de Suplementos</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Foi a melhor decisão para minha agência. Configuração simples, sem mensalidades 
                caras como outros chatbots, e resultados imediatos!"
              </p>
              <div className="font-semibold text-gray-900">- Maria Oliveira</div>
              <div className="text-sm text-gray-600">Agência de Marketing</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Paguei uma vez e recuperei o investimento na primeira semana! O melhor é que 
                não preciso ficar pagando mensalidades como nas outras ferramentas."
              </p>
              <div className="font-semibold text-gray-900">- Ricardo Mendes</div>
              <div className="text-sm text-gray-600">Loja de Roupas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Por Que o FacilitaGPT é Diferente?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 p-8 rounded-xl border-2 border-red-200">
              <h3 className="text-xl font-bold text-red-600 mb-6">Outras Soluções</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-center">
                  <X className="text-red-500 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Mensalidades caras + custo da API do ChatGPT</span>
                </div>
                <div className="flex items-center">
                  <X className="text-red-500 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Configuração técnica complexa</span>
                </div>
                <div className="flex items-center">
                  <X className="text-red-500 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Limitação de mensagens e recursos</span>
                </div>
                <div className="flex items-center">
                  <X className="text-red-500 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Suporte limitado ou inexistente</span>
                </div>
                <div className="flex items-center">
                  <X className="text-red-500 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Respostas robóticas e limitadas</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-xl border-2 border-green-200">
              <h3 className="text-xl font-bold text-green-600 mb-6">FacilitaGPT</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Pagamento único - sem mensalidades!</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Configuração em 5 minutos sem conhecimento técnico</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Uso ilimitado sem restrições</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Suporte técnico vitalício incluído</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-700">IA avançada que entende contexto e responde como humano</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            🎁 Benefícios Exclusivos do seu Acesso
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Suporte Técnico Vitalício</h3>
              <p className="text-gray-600">
                Tenha acesso ao nosso suporte técnico pelo WhatsApp para sempre! 
                Estamos aqui para ajudar você em qualquer momento.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Atualizações Automáticas</h3>
              <p className="text-gray-600">
                Receba todas as atualizações e melhorias do sistema automaticamente, 
                mantendo seu FacilitaGPT sempre atualizado.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mini Curso Prático na Kiwify</h3>
              <p className="text-gray-600">
                Acesso imediato ao curso rápido e prático ensinando instalação e 
                técnicas avançadas de vendas com o FacilitaGPT.
              </p>
            </div>
          </div>

          <div className="bg-yellow-100 border-2 border-yellow-400 p-6 rounded-lg">
            <p className="text-yellow-800 font-semibold text-lg">
              ✨ Tudo isso incluído em um único pagamento! Sem mensalidades ou taxas extras.
            </p>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="oferta" className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Oferta Exclusiva por Tempo Limitado
          </h2>
          
          {/* Price Box */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8 max-w-md mx-auto border-4 border-yellow-400">
            <div className="text-red-500 text-2xl line-through mb-2">De R$497,00</div>
            <div className="text-5xl font-bold text-green-600 mb-4">Por apenas R$197,00!</div>
            <div className="text-blue-600 font-semibold text-lg mb-2">💳 Pagamento único - sem mensalidades!</div>
            <div className="bg-yellow-100 p-4 rounded-lg mb-4">
              <div className="text-lg font-bold text-gray-900 mb-2">Bônus Exclusivo</div>
              <div className="text-sm text-gray-700">
                Guia Completo para Criar Mensagens que Vendem + Templates Prontos para Diversos Segmentos
              </div>
            </div>
            <div className="text-orange-600 font-semibold">Promoção válida apenas para os primeiros compradores!</div>
          </div>

          {/* Countdown */}
          <div className="bg-red-600 text-white p-4 rounded-lg mb-8 inline-block">
            <div className="text-lg font-semibold">⏰ Oferta expira em:</div>
            <div className="text-3xl font-bold">
              {timeLeft.minutes}:{timeLeft.seconds.toString().padStart(2, '0')}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors inline-flex items-center justify-center"
            >
              <MessageCircle className="mr-2" size={20} />
              🎯 Garanta Agora – Últimas Vagas!
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Perguntas Frequentes
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                O FacilitaGPT tem mensalidade?
              </h3>
              <p className="text-gray-600">
                Não! O FacilitaGPT é um pagamento único de R$197,00. Sem mensalidades, 
                sem taxas extras, sem surpresas. Você paga uma vez e usa para sempre.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Ele funciona no meu WhatsApp?
              </h3>
              <p className="text-gray-600">
                Sim! O FacilitaGPT funciona perfeitamente com qualquer número do WhatsApp, 
                seja pessoal ou comercial. A integração é simples e rápida.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Preciso ter conhecimentos de programação?
              </h3>
              <p className="text-gray-600">
                Absolutamente não! O FacilitaGPT foi desenvolvido para ser usado por qualquer pessoa, 
                sem necessidade de conhecimentos técnicos. A configuração é feita em poucos cliques.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Ele entende áudio e imagens?
              </h3>
              <p className="text-gray-600">
                Sim! O FacilitaGPT é capaz de processar e responder a mensagens de texto, 
                áudios e imagens, oferecendo um atendimento completo e inteligente.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Como ele se compara a outras soluções de chatbot?
              </h3>
              <p className="text-gray-600">
                Diferente de outras soluções que cobram mensalidades caras e têm limitações, 
                o FacilitaGPT oferece uso ilimitado, suporte vitalício e configuração simples 
                por um pagamento único.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Posso revender o FacilitaGPT?
              </h3>
              <p className="text-gray-600">
                Sim! O FacilitaGPT pode ser revendido, permitindo que você gere uma renda extra 
                oferecendo esta solução inovadora para outros empresários.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src="/logo.png" alt="FacilitaGPT" className="h-8 w-auto mb-4 filter brightness-0 invert" />
              <p className="text-gray-400 mb-4">
                Transformando atendimento no WhatsApp com Inteligência Artificial avançada.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#problemas" className="hover:text-white transition-colors">Problemas Resolvidos</a></li>
                <li><a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a></li>
                <li><a href="#beneficios" className="hover:text-white transition-colors">Benefícios</a></li>
                <li><a href="#oferta" className="hover:text-white transition-colors">Oferta Especial</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Perguntas Frequentes</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Mail className="mr-2" size={16} />
                  suporte@facilitagpt.com
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2" size={16} />
                  (22) 992798329
                </li>
                <li>
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-white transition-colors"
                  >
                    <MessageCircle className="mr-2" size={16} />
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Acesso Rápido</h4>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors inline-flex items-center"
              >
                <MessageCircle className="mr-2" size={20} />
                Comprar Agora
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 FacilitaGPT. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;