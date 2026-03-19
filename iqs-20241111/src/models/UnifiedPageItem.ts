// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnifiedPageItem extends $dara.Model {
  correlationTag?: number;
  hostAuthorityScore?: number;
  /**
   * @example
   * https://www.china.com/zh_cn/img1905/2023/logo.png
   */
  hostLogo?: string;
  hostname?: string;
  images?: string[];
  /**
   * @example
   * https://hea.china.com/articles/20250427/202504271666343.html
   */
  link?: string;
  mainText?: string;
  markdownText?: string;
  /**
   * @example
   * 2025-04-27T20:36:04+08:00
   */
  publishedTime?: string;
  /**
   * @example
   * 0.7786493301391602
   */
  rerankScore?: number;
  richMainBody?: string;
  snippet?: string;
  summary?: string;
  tags?: { [key: string]: any };
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
      tags: 'tags',
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
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      title: 'string',
      websiteAuthorityScore: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

