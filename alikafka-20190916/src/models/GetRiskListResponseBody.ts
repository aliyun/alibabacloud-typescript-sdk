// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRiskListResponseBodyDataRiskList extends $dara.Model {
  /**
   * @remarks
   * The creation timestamp. Unit: milliseconds.
   * 
   * @example
   * 1702545932000
   */
  createTime?: number;
  /**
   * @remarks
   * The metric rating. Valid values:
   * - A: Healthy.
   * - B: Sub-healthy.
   * - F: Poor.
   * 
   * @example
   * A
   */
  gradeType?: string;
  /**
   * @remarks
   * Indicates whether the instance is healthy. Valid values:
   * - true: Healthy.
   * - false: Unhealthy.
   * 
   * @example
   * true
   */
  health?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * alikafka_pre-cn-m7r1tzxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The timestamp of the last alert. Unit: milliseconds.
   * 
   * @example
   * 1683270264
   */
  lastAlarmTime?: number;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * - 0: Critical.
   * - 1: Important.
   * - 2: Normal.
   * 
   * @example
   * 1
   */
  levelType?: number;
  /**
   * @remarks
   * The modification timestamp. Unit: milliseconds.
   * 
   * @example
   * 1637719920000
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The name of the risk item.
   * 
   * > There are 24 types of names.
   * > - Detailed descriptions are provided in the following sections.
   * 
   * @example
   * inputIo
   */
  name?: string;
  /**
   * @remarks
   * The ID of the user who owns the instance.
   * 
   * @example
   * 0123123123xxx
   */
  owner?: string;
  /**
   * @remarks
   * The infinitely nested structure. The system determines whether to nest another layer of report data based on the outer-layer fields.
   */
  relationList?: string[];
  /**
   * @remarks
   * The remediation suggestion.
   * 
   * @example
   * The topics in the related issues have fragmented sending problems. Refer to References for optimization
   */
  reportTips?: string;
  /**
   * @remarks
   * The report type of the risk item. Valid values:
   * 
   * - topic: a specific topic that requires optimization.
   * - group: a specific group that requires optimization.
   * - doc: optimization is required based on the documentation.
   * - commonBuy: the returned risk item requires operations such as specification upgrade.
   * - mdsKey: follow the suggestions in ReportTips to fix the issue.
   * 
   * @example
   * doc
   */
  reportType?: string;
  /**
   * @remarks
   * The value of the report.
   * 
   * > 
   * > - If ReportType is set to doc, ReportValue returns a document address. You can construct the link by replacing the returned ReportValue in the following URL: <props="china">https://help.aliyun.com/document_detail/${reportValue}.html<props="intl">https://www.alibabacloud.com/help/document_detail/${reportValue}.html
   * >- If ReportType is set to commonBuy, operations such as specification upgrade are required.
   * >- If ReportType is set to topic, check the value of reportValue. The reportValue is the topic that has issues and requires fixing.
   * >- If ReportType is set to group, check the value of reportValue. The reportValue is the group that has issues and requires fixing.
   * >- If ReportType is set to mdsKey, follow the suggestions in ReportTips to fix the issue.
   * 
   * @example
   * test
   */
  reportValue?: string;
  /**
   * @remarks
   * The status of the risk item, which indicates whether the risk item has been fixed. Valid values:
   * 
   * - 0: Pending fix.
   * - -1: Ignored.
   * - 1: Fixed.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The type of the risk item.
   * > There are 24 types of risk items.
   * > - Detailed descriptions are provided in the following sections.
   * 
   * @example
   * inputIo
   */
  type?: string;
  /**
   * @remarks
   * The value calculated by the system.
   * 
   * > If ReportType is set to doc, check both the relationList field and the value field. The value field returns a number that indicates how many topics or groups in the relationList field require optimization.
   * >- If ReportType is set to commonBuy, compare the Value. The Value returns a percentage.
   * >- If ReportType is set to topic, check the Value. The value is the topic that has issues and requires fixing.
   * >- If ReportType is set to group, check the Value. The value is the group that has issues and requires fixing.
   * 
   * @example
   * 44
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      gradeType: 'GradeType',
      health: 'Health',
      instanceId: 'InstanceId',
      lastAlarmTime: 'LastAlarmTime',
      levelType: 'LevelType',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      owner: 'Owner',
      relationList: 'RelationList',
      reportTips: 'ReportTips',
      reportType: 'ReportType',
      reportValue: 'ReportValue',
      status: 'Status',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      gradeType: 'string',
      health: 'boolean',
      instanceId: 'string',
      lastAlarmTime: 'number',
      levelType: 'number',
      modifiedTime: 'number',
      name: 'string',
      owner: 'string',
      relationList: { 'type': 'array', 'itemType': 'string' },
      reportTips: 'string',
      reportType: 'string',
      reportValue: 'string',
      status: 'number',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.relationList)) {
      $dara.Model.validateArray(this.relationList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRiskListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of instance risk items.
   */
  riskList?: GetRiskListResponseBodyDataRiskList[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 11
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      riskList: 'RiskList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskList: { 'type': 'array', 'itemType': GetRiskListResponseBodyDataRiskList },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.riskList)) {
      $dara.Model.validateArray(this.riskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRiskListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned result.
   */
  data?: GetRiskListResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 06084011-E093-46F3-A51F-4B19A8AD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetRiskListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

