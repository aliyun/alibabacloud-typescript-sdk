// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnifiedPageItem extends $dara.Model {
  correlationTag?: number;
  hostAuthorityScore?: number;
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
  richMainBody?: string;
  snippet?: string;
  summary?: string;
  title?: string;
  websiteAuthorityScore?: number;
  static names(): { [key: string]: string } {
    return {
      correlationTag: 'correlationTag',
      hostAuthorityScore: 'hostAuthorityScore',
      hostLogo: 'hostLogo',
      hostname: 'hostname',
      images: 'images',
      link: 'link',
      mainText: 'mainText',
      markdownText: 'markdownText',
      publishedTime: 'publishedTime',
      rerankScore: 'rerankScore',
      richMainBody: 'richMainBody',
      snippet: 'snippet',
      summary: 'summary',
      title: 'title',
      websiteAuthorityScore: 'websiteAuthorityScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      correlationTag: 'number',
      hostAuthorityScore: 'number',
      hostLogo: 'string',
      hostname: 'string',
      images: { 'type': 'array', 'itemType': 'string' },
      link: 'string',
      mainText: 'string',
      markdownText: 'string',
      publishedTime: 'string',
      rerankScore: 'number',
      richMainBody: 'string',
      snippet: 'string',
      summary: 'string',
      title: 'string',
      websiteAuthorityScore: 'number',
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

