// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatSessionsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of digital employee names. A single string can be passed for backward compatibility with the legacy format.
   * 
   * @example
   * string_value
   */
  digitalEmployeeName?: string;
  /**
   * @remarks
   * The rule name keyword for fuzzy match.
   * 
   * @example
   * SampleKeyword
   */
  keyword?: string;
  /**
   * @remarks
   * The page number. Default value: 1. Pages start from page 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The maximum number of data records to read in this request.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The tenant ID to which the task belongs.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      digitalEmployeeName: 'digitalEmployeeName',
      keyword: 'keyword',
      page: 'page',
      pageSize: 'pageSize',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digitalEmployeeName: 'string',
      keyword: 'string',
      page: 'number',
      pageSize: 'number',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

