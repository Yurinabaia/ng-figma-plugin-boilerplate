import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet],
  standalone: true
})
export class AppComponent{

  // title = 'Teste';
  // target: string = "https://www.figma.com";

  // ngOnInit(): void {
  //   console.log('AppComponent initialized');
  //   this.setupMessageListener();
  // }

  // ngOnDestroy(): void {
  //   // Remove o listener quando o componente for destruído
  //   window.removeEventListener('message', this.handleMessage);
  // }

  // private setupMessageListener(): void {
  //   // Adiciona o listener para mensagens do Figma plugin
  //   window.addEventListener('message', this.handleMessage.bind(this));
  // }

  // private handleMessage = (event: MessageEvent) => {
  //   // Verifica se a mensagem vem do Figma
  //   if (event.origin !== 'https://www.figma.com') {
  //     return; // Ignora mensagens de outras origens por segurança
  //   }

  //   console.log('Message received from Figma plugin:', event.data);

  //   // Processa diferentes tipos de mensagem
  //   if (event.data.pluginMessage) {
  //     const { type, data } = event.data.pluginMessage;
      
  //     switch (type) {
  //       case 'selection-changed':
  //         this.handleSelectionChanged(data);
  //         break;
  //       case 'node-created':
  //         this.handleNodeCreated(data);
  //         break;
  //       case 'plugin-data':
  //         this.handlePluginData(data);
  //         break;
  //       default:
  //         console.log('Unknown message type:', type);
  //     }
  //   }
  // }

  // private handleSelectionChanged(data: any): void {
  //   console.log('Selection changed:', data);
  //   // Processa mudança de seleção
  // }

  // private handleNodeCreated(data: any): void {
  //   console.log('Node created:', data);
  //   // Processa criação de nó
  // }

  // private handlePluginData(data: any): void {
  //   console.log('Plugin data received:', data);
  //   // Processa dados do plugin
  // }

  // testeClick(): void {
  //   console.log('Button clicked, sending message to Figma plugin');
  //   // Envia mensagem para o plugin do Figma
  //   parent.postMessage({ 
  //     pluginMessage: { 
  //       type: 'create-rectangles', 
  //       count: 10 
  //     } 
  //   }, this.target);
  // }
}