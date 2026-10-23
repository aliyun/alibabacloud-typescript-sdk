// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnoseReportResponseBodyResultDiagnoseItemsDetail extends $dara.Model {
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
   * You may need to adjust the numbers of replica shards of some indices as follows: [geoname08 : 0 -&gt; 1][geoname09 : 0 -&gt; 1][geonametest01 : 0 -&gt; 1]
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
   * The type of the diagnostic result. Valid values: TEXT (text description), CONSOLE_API (triggered by the console), and ES_API (triggered by the API).
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

export class DescribeDiagnoseReportResponseBodyResultDiagnoseItems extends $dara.Model {
  /**
   * @remarks
   * The details of the diagnostic item.
   */
  detail?: DescribeDiagnoseReportResponseBodyResultDiagnoseItemsDetail;
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
      detail: DescribeDiagnoseReportResponseBodyResultDiagnoseItemsDetail,
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

export class DescribeDiagnoseReportResponseBodyResultItems extends $dara.Model {
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
   * Pay attention to GC
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

export class DescribeDiagnoseReportResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the report was created. Unit: milliseconds.
   * 
   * @example
   * 1535745731000
   */
  createTime?: number;
  /**
   * @remarks
   * The list of diagnostic items in the report.
   */
  diagnoseItems?: DescribeDiagnoseReportResponseBodyResultDiagnoseItems[];
  /**
   * @remarks
   * The diagnosis mode. Valid values: RULE and AGENT.
   * 
   * @example
   * RULE
   */
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
   * The instance ID.
   * 
   * @example
   * es-cn-abc
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of diagnostic item details. This parameter may be empty if details are not required.
   */
  items?: DescribeDiagnoseReportResponseBodyResultItems[];
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
   * The diagnosis status. Valid values: SUCCESS, FAILED, and RUNNING.
   * 
   * @example
   * SUCCESS
   */
  state?: string;
  /**
   * @remarks
   * The trigger method of the health diagnosis. Valid values: SYSTEM (automatically triggered by the system), INNER (internally triggered), and USER (manually triggered by the user).
   * 
   * @example
   * SYSTEM
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
      diagnoseItems: { 'type': 'array', 'itemType': DescribeDiagnoseReportResponseBodyResultDiagnoseItems },
      diagnosisMode: 'string',
      health: 'string',
      instanceId: 'string',
      items: { 'type': 'array', 'itemType': DescribeDiagnoseReportResponseBodyResultItems },
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

export class DescribeDiagnoseReportResponseBody extends $dara.Model {
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
   * The returned result.
   */
  result?: DescribeDiagnoseReportResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeDiagnoseReportResponseBodyResult,
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

