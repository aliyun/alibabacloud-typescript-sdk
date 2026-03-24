// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublicBroadcastSceneTemplatesRequest extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 20
   */
  size?: number;
  /**
   * @example
   * AI,BROADCAST
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      page: 'page',
      size: 'size',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      page: 'number',
      size: 'number',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

