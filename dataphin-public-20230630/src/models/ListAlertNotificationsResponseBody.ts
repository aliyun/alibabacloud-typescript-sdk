// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertNotificationsResponseBodyListResultDataAlertObject extends $dara.Model {
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * VDM_BATCH
   */
  sourceSystemType?: string;
  /**
   * @example
   * VDM_BATCH_SHELL
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

export class ListAlertNotificationsResponseBodyListResultDataAlertReasonAlertReasonParamList extends $dara.Model {
  /**
   * @example
   * biz_date
   */
  key?: string;
  /**
   * @example
   * 2024-11-24 00:00:00
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

export class ListAlertNotificationsResponseBodyListResultDataAlertReason extends $dara.Model {
  alertReasonParamList?: ListAlertNotificationsResponseBodyListResultDataAlertReasonAlertReasonParamList[];
  /**
   * @example
   * 20241125
   */
  bizDate?: string;
  /**
   * @example
   * VDM_BATCH_FINISH
   */
  type?: string;
  /**
   * @example
   * 123456
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
      alertReasonParamList: { 'type': 'array', 'itemType': ListAlertNotificationsResponseBodyListResultDataAlertReasonAlertReasonParamList },
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

export class ListAlertNotificationsResponseBodyListResultDataAlertReceiverUser extends $dara.Model {
  /**
   * @example
   * ADMIN
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

export class ListAlertNotificationsResponseBodyListResultDataAlertReceiver extends $dara.Model {
  /**
   * @example
   * SMS
   */
  alertChannelType?: string;
  /**
   * @example
   * 123456
   */
  customAlertChannelId?: string;
  /**
   * @example
   * 12345
   */
  onCallTableId?: string;
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
  user?: ListAlertNotificationsResponseBodyListResultDataAlertReceiverUser;
  static names(): { [key: string]: string } {
    return {
      alertChannelType: 'AlertChannelType',
      customAlertChannelId: 'CustomAlertChannelId',
      onCallTableId: 'OnCallTableId',
      onCallTableName: 'OnCallTableName',
      type: 'Type',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertChannelType: 'string',
      customAlertChannelId: 'string',
      onCallTableId: 'string',
      onCallTableName: 'string',
      type: 'string',
      user: ListAlertNotificationsResponseBodyListResultDataAlertReceiverUser,
    };
  }

  validate() {
    if(this.user && typeof (this.user as any).validate === 'function') {
      (this.user as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertNotificationsResponseBodyListResultDataAlertSend extends $dara.Model {
  failReason?: string;
  /**
   * @example
   * test
   */
  sendContent?: string;
  /**
   * @example
   * 2024-11-25 10:02:47
   */
  sendTime?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      failReason: 'FailReason',
      sendContent: 'SendContent',
      sendTime: 'SendTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failReason: 'string',
      sendContent: 'string',
      sendTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertNotificationsResponseBodyListResultData extends $dara.Model {
  /**
   * @example
   * 12345
   */
  alertEventId?: string;
  alertObject?: ListAlertNotificationsResponseBodyListResultDataAlertObject;
  alertReason?: ListAlertNotificationsResponseBodyListResultDataAlertReason;
  alertReceiver?: ListAlertNotificationsResponseBodyListResultDataAlertReceiver;
  alertSend?: ListAlertNotificationsResponseBodyListResultDataAlertSend;
  static names(): { [key: string]: string } {
    return {
      alertEventId: 'AlertEventId',
      alertObject: 'AlertObject',
      alertReason: 'AlertReason',
      alertReceiver: 'AlertReceiver',
      alertSend: 'AlertSend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertEventId: 'string',
      alertObject: ListAlertNotificationsResponseBodyListResultDataAlertObject,
      alertReason: ListAlertNotificationsResponseBodyListResultDataAlertReason,
      alertReceiver: ListAlertNotificationsResponseBodyListResultDataAlertReceiver,
      alertSend: ListAlertNotificationsResponseBodyListResultDataAlertSend,
    };
  }

  validate() {
    if(this.alertObject && typeof (this.alertObject as any).validate === 'function') {
      (this.alertObject as any).validate();
    }
    if(this.alertReason && typeof (this.alertReason as any).validate === 'function') {
      (this.alertReason as any).validate();
    }
    if(this.alertReceiver && typeof (this.alertReceiver as any).validate === 'function') {
      (this.alertReceiver as any).validate();
    }
    if(this.alertSend && typeof (this.alertSend as any).validate === 'function') {
      (this.alertSend as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertNotificationsResponseBodyListResult extends $dara.Model {
  data?: ListAlertNotificationsResponseBodyListResultData[];
  /**
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListAlertNotificationsResponseBodyListResultData },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertNotificationsResponseBody extends $dara.Model {
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
  listResult?: ListAlertNotificationsResponseBodyListResult;
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
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      listResult: 'ListResult',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      listResult: ListAlertNotificationsResponseBodyListResult,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.listResult && typeof (this.listResult as any).validate === 'function') {
      (this.listResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

