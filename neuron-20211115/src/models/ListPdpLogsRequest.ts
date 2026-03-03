// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPdpLogsRequest extends $dara.Model {
  /**
   * @example
   * 12
   */
  from?: number;
  /**
   * @example
   * 127.0.0.1
   */
  ip?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * user
   */
  query?: string;
  /**
   * @example
   * 1
   */
  serviceGroupId?: number;
  /**
   * @example
   * 1
   */
  sourceType?: string;
  /**
   * @example
   * 1
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'from',
      ip: 'ip',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      query: 'query',
      serviceGroupId: 'serviceGroupId',
      sourceType: 'sourceType',
      to: 'to',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      ip: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      query: 'string',
      serviceGroupId: 'number',
      sourceType: 'string',
      to: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

