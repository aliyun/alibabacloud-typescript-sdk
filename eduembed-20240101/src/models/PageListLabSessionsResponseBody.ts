// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PageListLabSessionsResponseBodyLabSessions } from "./PageListLabSessionsResponseBodyLabSessions";


export class PageListLabSessionsResponseBody extends $dara.Model {
  /**
   * @example
   * 00000
   */
  code?: string;
  labSessions?: PageListLabSessionsResponseBodyLabSessions[];
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
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      labSessions: 'LabSessions',
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
      labSessions: { 'type': 'array', 'itemType': PageListLabSessionsResponseBodyLabSessions },
      message: 'string',
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.labSessions)) {
      $dara.Model.validateArray(this.labSessions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

