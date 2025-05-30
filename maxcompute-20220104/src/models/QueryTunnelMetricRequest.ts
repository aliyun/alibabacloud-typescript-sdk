// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTunnelMetricRequest extends $dara.Model {
  codeList?: number[];
  groupList?: string[];
  operationList?: string[];
  /**
   * @example
   * project_a
   */
  project?: string;
  /**
   * @example
   * default
   */
  quotaNickname?: string;
  tableList?: string[];
  /**
   * @example
   * 10
   */
  topN?: number;
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
  /**
   * @example
   * max
   */
  strategy?: string;
  static names(): { [key: string]: string } {
    return {
      codeList: 'codeList',
      groupList: 'groupList',
      operationList: 'operationList',
      project: 'project',
      quotaNickname: 'quotaNickname',
      tableList: 'tableList',
      topN: 'topN',
      endTime: 'endTime',
      startTime: 'startTime',
      strategy: 'strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeList: { 'type': 'array', 'itemType': 'number' },
      groupList: { 'type': 'array', 'itemType': 'string' },
      operationList: { 'type': 'array', 'itemType': 'string' },
      project: 'string',
      quotaNickname: 'string',
      tableList: { 'type': 'array', 'itemType': 'string' },
      topN: 'number',
      endTime: 'number',
      startTime: 'number',
      strategy: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.codeList)) {
      $dara.Model.validateArray(this.codeList);
    }
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

