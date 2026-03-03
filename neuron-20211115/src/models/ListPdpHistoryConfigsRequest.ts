// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPdpHistoryConfigsRequest extends $dara.Model {
  configId?: number;
  /**
   * @example
   * gmtCreated
   */
  orderBy?: string;
  /**
   * @example
   * desc
   */
  orderDirection?: string;
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
   * 1
   */
  serviceGroupId?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'configId',
      orderBy: 'orderBy',
      orderDirection: 'orderDirection',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      serviceGroupId: 'serviceGroupId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      orderBy: 'string',
      orderDirection: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      serviceGroupId: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

