// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CrawlerType } from "./CrawlerType";


export class ListCrawlerTypesResponseBody extends $dara.Model {
  crawlerTypes?: CrawlerType[];
  /**
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      crawlerTypes: 'CrawlerTypes',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crawlerTypes: { 'type': 'array', 'itemType': CrawlerType },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.crawlerTypes)) {
      $dara.Model.validateArray(this.crawlerTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

