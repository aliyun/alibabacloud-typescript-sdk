// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnifiedImageItem extends $dara.Model {
  height?: number;
  hostPageUrl?: string;
  imageUrl?: string;
  publishedTime?: string;
  title?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'height',
      hostPageUrl: 'hostPageUrl',
      imageUrl: 'imageUrl',
      publishedTime: 'publishedTime',
      title: 'title',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      hostPageUrl: 'string',
      imageUrl: 'string',
      publishedTime: 'string',
      title: 'string',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

