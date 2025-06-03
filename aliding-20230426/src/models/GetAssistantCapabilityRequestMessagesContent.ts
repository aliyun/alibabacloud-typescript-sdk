// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAssistantCapabilityRequestMessagesContentCardCallback } from "./GetAssistantCapabilityRequestMessagesContentCardCallback";
import { GetAssistantCapabilityRequestMessagesContentDingCard } from "./GetAssistantCapabilityRequestMessagesContentDingCard";
import { GetAssistantCapabilityRequestMessagesContentDingNormalCard } from "./GetAssistantCapabilityRequestMessagesContentDingNormalCard";
import { GetAssistantCapabilityRequestMessagesContentMarkdown } from "./GetAssistantCapabilityRequestMessagesContentMarkdown";
import { GetAssistantCapabilityRequestMessagesContentStructView } from "./GetAssistantCapabilityRequestMessagesContentStructView";
import { GetAssistantCapabilityRequestMessagesContentText } from "./GetAssistantCapabilityRequestMessagesContentText";


export class GetAssistantCapabilityRequestMessagesContent extends $dara.Model {
  cardCallback?: GetAssistantCapabilityRequestMessagesContentCardCallback;
  dingCard?: GetAssistantCapabilityRequestMessagesContentDingCard;
  /**
   * @example
   * {}
   */
  dingNormalCard?: GetAssistantCapabilityRequestMessagesContentDingNormalCard;
  markdown?: GetAssistantCapabilityRequestMessagesContentMarkdown;
  structView?: GetAssistantCapabilityRequestMessagesContentStructView;
  text?: GetAssistantCapabilityRequestMessagesContentText;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 枚举字段，可为：text,markdown,cardCallback,dingCard,agentArtifact,dingNormalCard
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cardCallback: 'cardCallback',
      dingCard: 'dingCard',
      dingNormalCard: 'dingNormalCard',
      markdown: 'markdown',
      structView: 'structView',
      text: 'text',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardCallback: GetAssistantCapabilityRequestMessagesContentCardCallback,
      dingCard: GetAssistantCapabilityRequestMessagesContentDingCard,
      dingNormalCard: GetAssistantCapabilityRequestMessagesContentDingNormalCard,
      markdown: GetAssistantCapabilityRequestMessagesContentMarkdown,
      structView: GetAssistantCapabilityRequestMessagesContentStructView,
      text: GetAssistantCapabilityRequestMessagesContentText,
      type: 'string',
    };
  }

  validate() {
    if(this.cardCallback && typeof (this.cardCallback as any).validate === 'function') {
      (this.cardCallback as any).validate();
    }
    if(this.dingCard && typeof (this.dingCard as any).validate === 'function') {
      (this.dingCard as any).validate();
    }
    if(this.dingNormalCard && typeof (this.dingNormalCard as any).validate === 'function') {
      (this.dingNormalCard as any).validate();
    }
    if(this.markdown && typeof (this.markdown as any).validate === 'function') {
      (this.markdown as any).validate();
    }
    if(this.structView && typeof (this.structView as any).validate === 'function') {
      (this.structView as any).validate();
    }
    if(this.text && typeof (this.text as any).validate === 'function') {
      (this.text as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

