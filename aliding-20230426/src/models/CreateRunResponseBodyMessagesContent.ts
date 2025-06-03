// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateRunResponseBodyMessagesContentCardCallback } from "./CreateRunResponseBodyMessagesContentCardCallback";
import { CreateRunResponseBodyMessagesContentDingCard } from "./CreateRunResponseBodyMessagesContentDingCard";
import { CreateRunResponseBodyMessagesContentDingNormalCard } from "./CreateRunResponseBodyMessagesContentDingNormalCard";
import { CreateRunResponseBodyMessagesContentMarkdown } from "./CreateRunResponseBodyMessagesContentMarkdown";
import { CreateRunResponseBodyMessagesContentStructView } from "./CreateRunResponseBodyMessagesContentStructView";
import { CreateRunResponseBodyMessagesContentText } from "./CreateRunResponseBodyMessagesContentText";


export class CreateRunResponseBodyMessagesContent extends $dara.Model {
  cardCallback?: CreateRunResponseBodyMessagesContentCardCallback;
  dingCard?: CreateRunResponseBodyMessagesContentDingCard;
  /**
   * @example
   * {}
   */
  dingNormalCard?: CreateRunResponseBodyMessagesContentDingNormalCard;
  markdown?: CreateRunResponseBodyMessagesContentMarkdown;
  structView?: CreateRunResponseBodyMessagesContentStructView;
  text?: CreateRunResponseBodyMessagesContentText;
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
      cardCallback: CreateRunResponseBodyMessagesContentCardCallback,
      dingCard: CreateRunResponseBodyMessagesContentDingCard,
      dingNormalCard: CreateRunResponseBodyMessagesContentDingNormalCard,
      markdown: CreateRunResponseBodyMessagesContentMarkdown,
      structView: CreateRunResponseBodyMessagesContentStructView,
      text: CreateRunResponseBodyMessagesContentText,
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

