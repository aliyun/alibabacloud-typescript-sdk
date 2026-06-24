// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDiagnoseReportResponseBodyHeaders extends $dara.Model {
  /**
   * @remarks
   * The total number of records returned.
   * 
   * @example
   * 15
   */
  xTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      xTotalCount: 'X-Total-Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xTotalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnoseReportResponseBodyResultDiagnoseItemsDetail extends $dara.Model {
  /**
   * @remarks
   * The description of the diagnostic item.
   * 
   * @example
   * Check whether the number of replica shards is optimal and easy to maintain
   */
  desc?: string;
  /**
   * @remarks
   * The full name of the diagnostic item.
   * 
   * @example
   * Number of Replica Shards
   */
  name?: string;
  /**
   * @remarks
   * The diagnostic result.
   * 
   * @example
   * You may need to adjust the numbers of replica shards of some indices as follows:  [geoname08 : 0 -&gt; 1][geoname09 : 0 -&gt; 1][geonametest01 : 0 -&gt; 1]
   */
  result?: string;
  /**
   * @remarks
   * The diagnostic suggestion.
   * 
   * @example
   * You can call the following function in the Elasticsearch API....
   */
  suggest?: string;
  /**
   * @remarks
   * The type of the diagnostic result. Valid values:
   * 
   * - TEXT: text description
   * - CONSOLE_API: console-triggered
   * - ES_API: API-triggered.
   * 
   * @example
   * ES_API
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      name: 'name',
      result: 'result',
      suggest: 'suggest',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      name: 'string',
      result: 'string',
      suggest: 'string',
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

export class ListDiagnoseReportResponseBodyResultDiagnoseItems extends $dara.Model {
  /**
   * @remarks
   * The details of the diagnostic item.
   */
  detail?: ListDiagnoseReportResponseBodyResultDiagnoseItemsDetail;
  /**
   * @remarks
   * The health status of the diagnostic item. Valid values: GREEN, YELLOW, RED, and UNKNOWN.
   * 
   * @example
   * YELLOW
   */
  health?: string;
  /**
   * @remarks
   * The name of the diagnostic item.
   * 
   * @example
   * IndexAliasUseDiagnostic
   */
  item?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'detail',
      health: 'health',
      item: 'item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: ListDiagnoseReportResponseBodyResultDiagnoseItemsDetail,
      health: 'string',
      item: 'string',
    };
  }

  validate() {
    if(this.detail && typeof (this.detail as any).validate === 'function') {
      (this.detail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnoseReportResponseBodyResultItems extends $dara.Model {
  desc?: string;
  detail?: { [key: string]: any };
  item?: string;
  name?: string;
  state?: string;
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

export class ListDiagnoseReportResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the report was created.
   * 
   * @example
   * 1535745731000
   */
  createTime?: number;
  /**
   * @remarks
   * The list of diagnostic items in the report.
   */
  diagnoseItems?: ListDiagnoseReportResponseBodyResultDiagnoseItems[];
  diagnosisMode?: string;
  /**
   * @remarks
   * The overall health status of the cluster in the report. Valid values: GREEN, YELLOW, RED, and UNKNOWN.
   * 
   * @example
   * YELLOW
   */
  health?: string;
  /**
   * @remarks
   * The instance ID of the diagnosed instance.
   * 
   * @example
   * es-cn-abc
   */
  instanceId?: string;
  items?: ListDiagnoseReportResponseBodyResultItems[];
  /**
   * @remarks
   * The report ID.
   * 
   * @example
   * trigger__2020-08-17T17:09:02f
   */
  reportId?: string;
  /**
   * @remarks
   * The diagnostic status. Valid values: SUCCESS, FAILED, and RUNNING.
   * 
   * @example
   * SUCCESS
   */
  state?: string;
  /**
   * @remarks
   * The trigger method of the health diagnostics. Valid values:
   * 
   * - SYSTEM: automatically triggered by the system
   * - INNER: internally triggered
   * - USER: manually triggered by the user.
   * 
   * @example
   * USER
   */
  trigger?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      diagnoseItems: 'diagnoseItems',
      diagnosisMode: 'diagnosisMode',
      health: 'health',
      instanceId: 'instanceId',
      items: 'items',
      reportId: 'reportId',
      state: 'state',
      trigger: 'trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      diagnoseItems: { 'type': 'array', 'itemType': ListDiagnoseReportResponseBodyResultDiagnoseItems },
      diagnosisMode: 'string',
      health: 'string',
      instanceId: 'string',
      items: { 'type': 'array', 'itemType': ListDiagnoseReportResponseBodyResultItems },
      reportId: 'string',
      state: 'string',
      trigger: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.diagnoseItems)) {
      $dara.Model.validateArray(this.diagnoseItems);
    }
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnoseReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response headers.
   */
  headers?: ListDiagnoseReportResponseBodyHeaders;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1****
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   */
  result?: ListDiagnoseReportResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListDiagnoseReportResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDiagnoseReportResponseBodyResult },
    };
  }

  validate() {
    if(this.headers && typeof (this.headers as any).validate === 'function') {
      (this.headers as any).validate();
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

