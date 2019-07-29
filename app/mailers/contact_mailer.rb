class ContactMailer < ActionMailer::Base
  default :from => 'napp_dirlic.centro@iff.edu.br'

  def contact_message(current_user)
    @current_user = current_user
    # mail(:to => current_user.email, :subject => 'Mensagem de Contato')
    mail(:to => 'napp_dirlic.centro@iff.edu.br', :subject => 'Mensagem de Contato')
  end

  def confirmacao_impressao(current_user)
    @current_user = current_user
    # mail(:to => current_user.email, :subject => 'Mensagem de Contato')
    mail(:to => 'napp_dirlic.centro@iff.edu.br', :subject => 'Impressão de Formulário')
  end

end
