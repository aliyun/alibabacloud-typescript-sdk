// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateRunResponseBodyDeltaContentCardCallback } from "./CreateRunResponseBodyDeltaContentCardCallback";
import { CreateRunResponseBodyDeltaContentDingCard } from "./CreateRunResponseBodyDeltaContentDingCard";
import { CreateRunResponseBodyDeltaContentImageUrl } from "./CreateRunResponseBodyDeltaContentImageUrl";
import { CreateRunResponseBodyDeltaContentMarkdown } from "./CreateRunResponseBodyDeltaContentMarkdown";
import { CreateRunResponseBodyDeltaContentText } from "./CreateRunResponseBodyDeltaContentText";


export class CreateRunResponseBodyDeltaContent extends $dara.Model {
  cardCallback?: CreateRunResponseBodyDeltaContentCardCallback;
  dingCard?: CreateRunResponseBodyDeltaContentDingCard;
  imageUrl?: CreateRunResponseBodyDeltaContentImageUrl;
  markdown?: CreateRunResponseBodyDeltaContentMarkdown;
  text?: CreateRunResponseBodyDeltaContentText;
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
      cardCallback: CreateRunResponseBodyDeltaContentCardCallback,
      dingCard: CreateRunResponseBodyDeltaContentDingCard,
      imageUrl: CreateRunResponseBodyDeltaContentImageUrl,
      markdown: CreateRunResponseBodyDeltaContentMarkdown,
      text: CreateRunResponseBodyDeltaContentText,
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

