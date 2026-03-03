// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchTracesByPageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2022-11-08 15:03:21
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TEST
   */
  env?: string;
  /**
   * @example
   * 100
   */
  minDuration?: number;
  /**
   * @example
   * /demo/queryNotExistDB/11
   */
  operationName?: string;
  /**
   * @example
   * id
   */
  orderBy?: string;
  /**
   * @example
   * DESC
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  serviceGroupId?: number;
  /**
   * @example
   * dev-sellercenter
   */
  serviceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2022-10-31 11:10:22
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      env: 'env',
      minDuration: 'minDuration',
      operationName: 'operationName',
      orderBy: 'orderBy',
      orderDirection: 'orderDirection',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      serviceGroupId: 'serviceGroupId',
      serviceName: 'serviceName',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      env: 'string',
      minDuration: 'number',
      operationName: 'string',
      orderBy: 'string',
      orderDirection: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      serviceGroupId: 'number',
      serviceName: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

