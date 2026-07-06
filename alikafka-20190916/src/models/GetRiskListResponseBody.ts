// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRiskListResponseBodyDataRiskList extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the threat was created. Unit: milliseconds.
   * 
   * @example
   * 1702545932000
   */
  createTime?: number;
  /**
   * @remarks
   * The metric rating. Valid values:
   * 
   * - A: Healthy.
   * 
   * - B: Suboptimal.
   * 
   * - F: Poor.
   * 
   * @example
   * A
   */
  gradeType?: string;
  /**
   * @remarks
   * Indicates whether the instance is healthy.
   * This is a Boolean parameter. Valid values:
   * 
   * - true: The instance is healthy.
   * 
   * - false: The instance is unhealthy.
   * 
   * @example
   * true
   */
  health?: boolean;
  /**
   * @remarks
   * The list of instance IDs.
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
   * - 0: Urgent.
   * 
   * - 1: Important.
   * 
   * - 2: Normal.
   * 
   * @example
   * 1
   */
  levelType?: number;
  /**
   * @remarks
   * The timestamp when the threat was last modified. Unit: milliseconds.
   * 
   * @example
   * 1637719920000
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The name of the threat item.
   * 
   * > There are 24 types of names.
   * >
   * > - For more information, see the supplementary notes at the end of this document.
   * 
   * @example
   * inputIo
   */
  name?: string;
  /**
   * @remarks
   * The ID of the owner.
   * 
   * @example
   * 0123123123xxx
   */
  owner?: string;
  /**
   * @remarks
   * A cascading structure. The system determines whether to nest another layer of report data based on the values of outer fields.
   */
  relationList?: string[];
  /**
   * @remarks
   * The recommended fix.
   * 
   * @example
   * 相关问题里的Topic存在碎片化发送问题，请参考文档进行优化
   */
  reportTips?: string;
  /**
   * @remarks
   * The report type of the threat item. Valid values:
   * 
   * - topic: Optimization is required for a specific topic.
   * 
   * - group: Optimization is required for a specific group.
   * 
   * - doc: Optimization must be performed based on a document.
   * 
   * - commonBuy: An upgrade or a similar operation is required for the returned threat item.
   * 
   * - mdsKey: You only need to fix the threat based on the suggestions in ReportTips.
   * 
   * @example
   * doc
   */
  reportType?: string;
  /**
   * @remarks
   * The value of the report.
   * 
   * > - If ReportType is doc, ReportValue returns the document ID. You can construct the URL to the document by replacing the ${reportValue} variable in the following URL with the returned value: <props="china">https\\://help.aliyun.com/document_detail/${reportValue}.html<props="intl">https\\://www\\.alibabacloud.com/help/document_detail/${reportValue}.html
   * >
   * > - If ReportType is commonBuy, an upgrade or a similar operation is required.
   * >
   * > - If ReportType is topic, the value of ReportValue is the name of the topic that needs to be fixed.
   * >
   * > - If ReportType is group, the value of ReportValue is the name of the group that needs to be fixed.
   * >
   * > - If ReportType is mdsKey, you only need to fix the threat based on the suggestions in ReportTips.
   * 
   * @example
   * test
   */
  reportValue?: string;
  /**
   * @remarks
   * The status of the threat item. This parameter indicates whether the threat has been fixed. Valid values:
   * 
   * - 0: To be fixed.
   * 
   * - -1: Ignored.
   * 
   * - 1: Fixed.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The type of the threat item.
   * 
   * > There are 24 types of threats.
   * >
   * > - For more information, see the supplementary notes at the end of this document.
   * 
   * @example
   * inputIo
   */
  type?: string;
  /**
   * @remarks
   * The value calculated by the system.
   * 
   * > If ReportType is doc, check the relationList and value fields. The value field returns a number that indicates the number of topics or groups in the `relationList` field that require optimization.
   * >
   * > - When ReportType is commonBuy, check the value of Value. The value is a percentage.
   * >
   * > - When ReportType is topic, check the value of Value. The value identifies the Topic that needs to be fixed.
   * >
   * > - When ReportType is group, check the value of Value. The value identifies the Group that needs to be fixed.
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
   * The list of threat items for the instance.
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
   * The return code. A value of 200 indicates that the call is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
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

