// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDiagnoseReportResponseBodyHeaders extends $dara.Model {
  /**
   * @remarks
   * The returned results.
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
   * The diagnosis.
   * 
   * @example
   * Check whether the number of replica shards is optimal and easy to maintain
   */
  desc?: string;
  /**
   * @remarks
   * The description of the diagnostic item.
   * 
   * @example
   * Number of Replica Shards
   */
  name?: string;
  /**
   * @remarks
   * The suggestion for the diagnosis.
   * 
   * @example
   * You may need to adjust the numbers of replica shards of some indices as follows:  [geoname08 : 0 -&gt; 1][geoname09 : 0 -&gt; 1][geonametest01 : 0 -&gt; 1]
   */
  result?: string;
  /**
   * @example
   * You can call the following function in the Elasticsearch API....
   */
  suggest?: string;
  /**
   * @remarks
   * The full name of the diagnostic item.
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
   * The type of the diagnostic result. Valid values:
   * 
   * *   TEXT: text description
   * *   CONSOLE_API: console-triggered
   * *   ES_API: API triggered
   */
  detail?: ListDiagnoseReportResponseBodyResultDiagnoseItemsDetail;
  /**
   * @remarks
   * The details of the diagnostic item.
   * 
   * @example
   * YELLOW
   */
  health?: string;
  /**
   * @remarks
   * The health of the diagnostic item. Supported: GREEN, YELLOW, RED, and UNKNOWN.
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

export class ListDiagnoseReportResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the report.
   * 
   * @example
   * 1535745731000
   */
  createTime?: number;
  /**
   * @remarks
   * The name of the item.
   */
  diagnoseItems?: ListDiagnoseReportResponseBodyResultDiagnoseItems[];
  /**
   * @remarks
   * Reports the list of diagnostic item information.
   * 
   * @example
   * YELLOW
   */
  health?: string;
  /**
   * @remarks
   * The overall health of the cluster in the report. Supported: GREEN, YELLOW, RED, and UNKNOWN.
   * 
   * @example
   * es-cn-abc
   */
  instanceId?: string;
  /**
   * @remarks
   * The diagnosis status. Valid values: Supported: SUCCESS, FAILED, and RUNNING.
   * 
   * @example
   * trigger__2020-08-17T17:09:02f
   */
  reportId?: string;
  /**
   * @remarks
   * The ID of the instance for diagnosis.
   * 
   * @example
   * SUCCESS
   */
  state?: string;
  /**
   * @remarks
   * The timestamp when the report was created.
   * 
   * @example
   * USER
   */
  trigger?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      diagnoseItems: 'diagnoseItems',
      health: 'health',
      instanceId: 'instanceId',
      reportId: 'reportId',
      state: 'state',
      trigger: 'trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      diagnoseItems: { 'type': 'array', 'itemType': ListDiagnoseReportResponseBodyResultDiagnoseItems },
      health: 'string',
      instanceId: 'string',
      reportId: 'string',
      state: 'string',
      trigger: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.diagnoseItems)) {
      $dara.Model.validateArray(this.diagnoseItems);
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
   * The total number of entries returned.
   */
  headers?: ListDiagnoseReportResponseBodyHeaders;
  /**
   * @remarks
   * The header of the response.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1****
   */
  requestId?: string;
  /**
   * @remarks
   * The trigger mode of health diagnostics. Valid values:
   * 
   * *   SYSTEM: The system is automatically triggered.
   * *   INNER: internal trigger
   * *   USER: manually triggered by the user
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

