// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlertEventResponseBodyAlertEventInfoAlertObject extends $dara.Model {
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * ALL
   */
  sourceSystemType?: string;
  /**
   * @example
   * VDM_BATCH_PYTHON37
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      sourceSystemType: 'SourceSystemType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      sourceSystemType: 'string',
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

export class GetAlertEventResponseBodyAlertEventInfoAlertReasonAlertReasonParamList extends $dara.Model {
  /**
   * @example
   * biz_date
   */
  key?: string;
  /**
   * @example
   * 2024-11-04 00:00:00
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertEventResponseBodyAlertEventInfoAlertReason extends $dara.Model {
  alertReasonParamList?: GetAlertEventResponseBodyAlertEventInfoAlertReasonAlertReasonParamList[];
  /**
   * @example
   * 2024-11-05 16:19:32
   */
  bizDate?: string;
  /**
   * @example
   * VDM_BATCH_FINISH
   */
  type?: string;
  /**
   * @example
   * t_6340131422711644160_20241104_6340142
   */
  uniqueKey?: string;
  static names(): { [key: string]: string } {
    return {
      alertReasonParamList: 'AlertReasonParamList',
      bizDate: 'BizDate',
      type: 'Type',
      uniqueKey: 'UniqueKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertReasonParamList: { 'type': 'array', 'itemType': GetAlertEventResponseBodyAlertEventInfoAlertReasonAlertReasonParamList },
      bizDate: 'string',
      type: 'string',
      uniqueKey: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.alertReasonParamList)) {
      $dara.Model.validateArray(this.alertReasonParamList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertEventResponseBodyAlertEventInfoAlertReceiverListUserList extends $dara.Model {
  /**
   * @example
   * Admin
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertEventResponseBodyAlertEventInfoAlertReceiverList extends $dara.Model {
  alertChannelTypeList?: string[];
  customAlertChannelIdList?: string[];
  /**
   * @example
   * test
   */
  onCallTableName?: string;
  /**
   * @example
   * OWNER
   */
  type?: string;
  userList?: GetAlertEventResponseBodyAlertEventInfoAlertReceiverListUserList[];
  static names(): { [key: string]: string } {
    return {
      alertChannelTypeList: 'AlertChannelTypeList',
      customAlertChannelIdList: 'CustomAlertChannelIdList',
      onCallTableName: 'OnCallTableName',
      type: 'Type',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertChannelTypeList: { 'type': 'array', 'itemType': 'string' },
      customAlertChannelIdList: { 'type': 'array', 'itemType': 'string' },
      onCallTableName: 'string',
      type: 'string',
      userList: { 'type': 'array', 'itemType': GetAlertEventResponseBodyAlertEventInfoAlertReceiverListUserList },
    };
  }

  validate() {
    if(Array.isArray(this.alertChannelTypeList)) {
      $dara.Model.validateArray(this.alertChannelTypeList);
    }
    if(Array.isArray(this.customAlertChannelIdList)) {
      $dara.Model.validateArray(this.customAlertChannelIdList);
    }
    if(Array.isArray(this.userList)) {
      $dara.Model.validateArray(this.userList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertEventResponseBodyAlertEventInfoBelongProject extends $dara.Model {
  /**
   * @example
   * biz_1
   */
  bizName?: string;
  /**
   * @example
   * project_1
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      bizName: 'BizName',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizName: 'string',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertEventResponseBodyAlertEventInfoUrlConfig extends $dara.Model {
  /**
   * @example
   * https://dataphin.com/ops/test3
   */
  alertConfigUrl?: string;
  /**
   * @example
   * https://dataphin.com/ops/test2
   */
  logUrl?: string;
  /**
   * @example
   * https://dataphin.com/ops/test1
   */
  objectUrl?: string;
  static names(): { [key: string]: string } {
    return {
      alertConfigUrl: 'AlertConfigUrl',
      logUrl: 'LogUrl',
      objectUrl: 'ObjectUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfigUrl: 'string',
      logUrl: 'string',
      objectUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertEventResponseBodyAlertEventInfo extends $dara.Model {
  /**
   * @example
   * ONCE
   */
  alertFrequency?: string;
  alertObject?: GetAlertEventResponseBodyAlertEventInfoAlertObject;
  alertReason?: GetAlertEventResponseBodyAlertEventInfoAlertReason;
  alertReceiverList?: GetAlertEventResponseBodyAlertEventInfoAlertReceiverList[];
  belongProject?: GetAlertEventResponseBodyAlertEventInfoBelongProject;
  /**
   * @example
   * 2024-11-05 00:00:00
   */
  doNotDisturbEndTime?: string;
  /**
   * @example
   * 2024-11-05 16:19:33
   */
  firstAlertTime?: string;
  /**
   * @example
   * 12345
   */
  id?: number;
  /**
   * @example
   * 2024-11-05 16:19:33
   */
  latestAlertTime?: string;
  /**
   * @example
   * FINISH
   */
  status?: string;
  /**
   * @example
   * 1
   */
  totalAlertTimes?: number;
  urlConfig?: GetAlertEventResponseBodyAlertEventInfoUrlConfig;
  static names(): { [key: string]: string } {
    return {
      alertFrequency: 'AlertFrequency',
      alertObject: 'AlertObject',
      alertReason: 'AlertReason',
      alertReceiverList: 'AlertReceiverList',
      belongProject: 'BelongProject',
      doNotDisturbEndTime: 'DoNotDisturbEndTime',
      firstAlertTime: 'FirstAlertTime',
      id: 'Id',
      latestAlertTime: 'LatestAlertTime',
      status: 'Status',
      totalAlertTimes: 'TotalAlertTimes',
      urlConfig: 'UrlConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertFrequency: 'string',
      alertObject: GetAlertEventResponseBodyAlertEventInfoAlertObject,
      alertReason: GetAlertEventResponseBodyAlertEventInfoAlertReason,
      alertReceiverList: { 'type': 'array', 'itemType': GetAlertEventResponseBodyAlertEventInfoAlertReceiverList },
      belongProject: GetAlertEventResponseBodyAlertEventInfoBelongProject,
      doNotDisturbEndTime: 'string',
      firstAlertTime: 'string',
      id: 'number',
      latestAlertTime: 'string',
      status: 'string',
      totalAlertTimes: 'number',
      urlConfig: GetAlertEventResponseBodyAlertEventInfoUrlConfig,
    };
  }

  validate() {
    if(this.alertObject && typeof (this.alertObject as any).validate === 'function') {
      (this.alertObject as any).validate();
    }
    if(this.alertReason && typeof (this.alertReason as any).validate === 'function') {
      (this.alertReason as any).validate();
    }
    if(Array.isArray(this.alertReceiverList)) {
      $dara.Model.validateArray(this.alertReceiverList);
    }
    if(this.belongProject && typeof (this.belongProject as any).validate === 'function') {
      (this.belongProject as any).validate();
    }
    if(this.urlConfig && typeof (this.urlConfig as any).validate === 'function') {
      (this.urlConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertEventResponseBody extends $dara.Model {
  alertEventInfo?: GetAlertEventResponseBodyAlertEventInfo;
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      alertEventInfo: 'AlertEventInfo',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertEventInfo: GetAlertEventResponseBodyAlertEventInfo,
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.alertEventInfo && typeof (this.alertEventInfo as any).validate === 'function') {
      (this.alertEventInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

