// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PageListLabsResponseBodyLabs } from "./PageListLabsResponseBodyLabs";


export class PageListLabsResponseBody extends $dara.Model {
  /**
   * @example
   * 00000
   */
  code?: string;
  labs?: PageListLabsResponseBodyLabs[];
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 9ADC729B-...
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      labs: 'Labs',
      message: 'Message',
      page: 'Page',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      labs: { 'type': 'array', 'itemType': PageListLabsResponseBodyLabs },
      message: 'string',
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.labs)) {
      $dara.Model.validateArray(this.labs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

