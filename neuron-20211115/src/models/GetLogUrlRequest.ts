// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLogUrlRequest extends $dara.Model {
  /**
   * @remarks
   * ip
   * 
   * @example
   * 172.35.1.139
   */
  ip?: string;
  orderBy?: string;
  orderDirection?: string;
  pageNumber?: number;
  pageSize?: number;
  /**
   * @example
   * Exception
   */
  query?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  serviceGroupId?: number;
  sourceType?: string;
  /**
   * @example
   * 1667985359
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      ip: 'ip',
      orderBy: 'orderBy',
      orderDirection: 'orderDirection',
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
      ip: 'string',
      orderBy: 'string',
      orderDirection: 'string',
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

