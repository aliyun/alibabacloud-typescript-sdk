// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateRunResponseBodyDataContentCardCallback } from "./CreateRunResponseBodyDataContentCardCallback";
import { CreateRunResponseBodyDataContentDingCard } from "./CreateRunResponseBodyDataContentDingCard";
import { CreateRunResponseBodyDataContentImageUrl } from "./CreateRunResponseBodyDataContentImageUrl";
import { CreateRunResponseBodyDataContentMarkdown } from "./CreateRunResponseBodyDataContentMarkdown";
import { CreateRunResponseBodyDataContentText } from "./CreateRunResponseBodyDataContentText";


export class CreateRunResponseBodyDataContent extends $dara.Model {
  cardCallback?: CreateRunResponseBodyDataContentCardCallback;
  dingCard?: CreateRunResponseBodyDataContentDingCard;
  imageUrl?: CreateRunResponseBodyDataContentImageUrl;
  markdown?: CreateRunResponseBodyDataContentMarkdown;
  text?: CreateRunResponseBodyDataContentText;
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
      cardCallback: CreateRunResponseBodyDataContentCardCallback,
      dingCard: CreateRunResponseBodyDataContentDingCard,
      imageUrl: CreateRunResponseBodyDataContentImageUrl,
      markdown: CreateRunResponseBodyDataContentMarkdown,
      text: CreateRunResponseBodyDataContentText,
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

