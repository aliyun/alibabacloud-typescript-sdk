// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRiskListResponseBodyDataRiskList extends $dara.Model {
  /**
   * @example
   * 1702545932000
   */
  createTime?: number;
  /**
   * @example
   * A
   */
  gradeType?: string;
  /**
   * @example
   * true
   */
  health?: boolean;
  /**
   * @example
   * alikafka_pre-cn-m7r1tzxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * 1683270264
   */
  lastAlarmTime?: number;
  /**
   * @example
   * 1
   */
  levelType?: number;
  /**
   * @example
   * 1637719920000
   */
  modifiedTime?: number;
  /**
   * @example
   * inputIo
   */
  name?: string;
  /**
   * @example
   * 0123123123xxx
   */
  owner?: string;
  relationList?: string[];
  reportTips?: string;
  /**
   * @example
   * doc
   */
  reportType?: string;
  /**
   * @example
   * test
   */
  reportValue?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * inputIo
   */
  type?: string;
  /**
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
  riskList?: GetRiskListResponseBodyDataRiskList[];
  /**
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
   * @example
   * 200
   */
  code?: number;
  data?: GetRiskListResponseBodyData;
  /**
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @example
   * 06084011-E093-46F3-A51F-4B19A8AD****
   */
  requestId?: string;
  /**
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

