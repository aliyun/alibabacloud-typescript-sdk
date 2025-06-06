// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnifiedPageItem extends $dara.Model {
  hostLogo?: string;
  hostname?: string;
  images?: string[];
  link?: string;
  mainText?: string;
  markdownText?: string;
  /**
   * @example
   * 2025-04-07T10:15:30.123+08:00
   */
  publishedTime?: string;
  rerankScore?: number;
  snippet?: string;
  summary?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      hostLogo: 'hostLogo',
      hostname: 'hostname',
      images: 'images',
      link: 'link',
      mainText: 'mainText',
      markdownText: 'markdownText',
      publishedTime: 'publishedTime',
      rerankScore: 'rerankScore',
      snippet: 'snippet',
      summary: 'summary',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostLogo: 'string',
      hostname: 'string',
      images: { 'type': 'array', 'itemType': 'string' },
      link: 'string',
      mainText: 'string',
      markdownText: 'string',
      publishedTime: 'string',
      rerankScore: 'number',
      snippet: 'string',
      summary: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

