// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DiagnoseInstanceResponseBodyResultItems extends $dara.Model {
  /**
   * @remarks
   * The description of the diagnostic conclusion.
   * 
   * @example
   * Everything is normal
   */
  desc?: string;
  /**
   * @remarks
   * The diagnostic details. This parameter is empty if details are not required.
   */
  detail?: { [key: string]: any };
  /**
   * @remarks
   * The code of the diagnostic item.
   * 
   * @example
   * cluster.health
   */
  item?: string;
  /**
   * @remarks
   * The name of the diagnostic item.
   * 
   * @example
   * Cluster health
   */
  name?: string;
  /**
   * @remarks
   * The health status of the diagnostic item. Valid values: GREEN, YELLOW, and RED.
   * 
   * @example
   * GREEN
   */
  state?: string;
  /**
   * @remarks
   * The handling suggestion.
   * 
   * @example
   * Monitor GC
   */
  suggest?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      detail: 'detail',
      item: 'item',
      name: 'name',
      state: 'state',
      suggest: 'suggest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      item: 'string',
      name: 'string',
      state: 'string',
      suggest: 'string',
    };
  }

  validate() {
    if(this.detail) {
      $dara.Model.validateMap(this.detail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiagnoseInstanceResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the diagnostic report was generated.
   * 
   * @example
   * 1535745731000
   */
  createTime?: number;
  /**
   * @remarks
   * The diagnostic mode. Valid values: RULE and AGENT.
   * 
   * @example
   * RULE
   */
  diagnosisMode?: string;
  /**
   * @remarks
   * The instance ID of the diagnosed instance.
   * 
   * @example
   * es-cn-n6w1o1x0w001c****
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of diagnostic item details. This parameter may be empty if details are not required.
   */
  items?: DiagnoseInstanceResponseBodyResultItems[];
  /**
   * @remarks
   * The report ID.
   * 
   * @example
   * trigger__2020-08-17T17:09:02
   */
  reportId?: string;
  /**
   * @remarks
   * The diagnostic status. Valid values: SUCCESS, FAILED, and RUNNING.
   * 
   * @example
   * RUNNING
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      diagnosisMode: 'diagnosisMode',
      instanceId: 'instanceId',
      items: 'items',
      reportId: 'reportId',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      diagnosisMode: 'string',
      instanceId: 'string',
      items: { 'type': 'array', 'itemType': DiagnoseInstanceResponseBodyResultItems },
      reportId: 'string',
      state: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiagnoseInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D***
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: DiagnoseInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DiagnoseInstanceResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

