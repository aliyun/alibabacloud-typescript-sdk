// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateRunResponseBodyContentCardCallback } from "./CreateRunResponseBodyContentCardCallback";
import { CreateRunResponseBodyContentDingCard } from "./CreateRunResponseBodyContentDingCard";
import { CreateRunResponseBodyContentImageUrl } from "./CreateRunResponseBodyContentImageUrl";
import { CreateRunResponseBodyContentMarkdown } from "./CreateRunResponseBodyContentMarkdown";
import { CreateRunResponseBodyContentText } from "./CreateRunResponseBodyContentText";


export class CreateRunResponseBodyContent extends $dara.Model {
  cardCallback?: CreateRunResponseBodyContentCardCallback;
  dingCard?: CreateRunResponseBodyContentDingCard;
  imageUrl?: CreateRunResponseBodyContentImageUrl;
  markdown?: CreateRunResponseBodyContentMarkdown;
  text?: CreateRunResponseBodyContentText;
  /**
   * @example
   * text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cardCallback: 'cardCallback',
      dingCard: 'dingCard',
      imageUrl: 'imageUrl',
      markdown: 'markdown',
      text: 'text',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardCallback: CreateRunResponseBodyContentCardCallback,
      dingCard: CreateRunResponseBodyContentDingCard,
      imageUrl: CreateRunResponseBodyContentImageUrl,
      markdown: CreateRunResponseBodyContentMarkdown,
      text: CreateRunResponseBodyContentText,
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
    if(this.imageUrl && typeof (this.imageUrl as any).validate === 'function') {
      (this.imageUrl as any).validate();
    }
    if(this.markdown && typeof (this.markdown as any).validate === 'function') {
      (this.markdown as any).validate();
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

