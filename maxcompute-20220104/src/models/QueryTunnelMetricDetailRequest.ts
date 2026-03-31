// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTunnelMetricDetailRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  ascOrder?: boolean;
  groupList?: string[];
  /**
   * @example
   * 10
   */
  limit?: number;
  operationList?: string[];
  /**
   * @example
   * maxValue
   */
  orderColumn?: string;
  /**
   * @example
   * project_a
   */
  project?: string;
  /**
   * @example
   * quota_A
   */
  quotaNickname?: string;
  tableList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1735536322
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1735534322
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      ascOrder: 'ascOrder',
      groupList: 'groupList',
      limit: 'limit',
      operationList: 'operationList',
      orderColumn: 'orderColumn',
      project: 'project',
      quotaNickname: 'quotaNickname',
      tableList: 'tableList',
      endTime: 'endTime',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ascOrder: 'boolean',
      groupList: { 'type': 'array', 'itemType': 'string' },
      limit: 'number',
      operationList: { 'type': 'array', 'itemType': 'string' },
      orderColumn: 'string',
      project: 'string',
      quotaNickname: 'string',
      tableList: { 'type': 'array', 'itemType': 'string' },
      endTime: 'number',
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groupList)) {
      $dara.Model.validateArray(this.groupList);
    }
    if(Array.isArray(this.operationList)) {
      $dara.Model.validateArray(this.operationList);
    }
    if(Array.isArray(this.tableList)) {
      $dara.Model.validateArray(this.tableList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

