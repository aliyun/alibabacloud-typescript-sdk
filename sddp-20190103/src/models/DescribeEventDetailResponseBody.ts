// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventDetailResponseBodyEventDetailChartData extends $dara.Model {
  /**
   * @remarks
   * The values of the data items on the x-axis.
   * 
   * @example
   * [test1,test2,...]
   */
  x?: string[];
  /**
   * @remarks
   * The values of the data items on the y-axis.
   * 
   * @example
   * [1,2,3,...]
   */
  y?: string[];
  /**
   * @remarks
   * The values of the data items on the z-axis.
   */
  z?: string[];
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
      z: 'Z',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: { 'type': 'array', 'itemType': 'string' },
      y: { 'type': 'array', 'itemType': 'string' },
      z: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.x)) {
      $dara.Model.validateArray(this.x);
    }
    if(Array.isArray(this.y)) {
      $dara.Model.validateArray(this.y);
    }
    if(Array.isArray(this.z)) {
      $dara.Model.validateArray(this.z);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventDetailResponseBodyEventDetailChart extends $dara.Model {
  /**
   * @remarks
   * The type of the chart. Valid values:
   * 
   * - **1**: column chart.
   * 
   * - **2**: line chart.
   * 
   * > This parameter is returned only when NewAlarm is set to true.
   * 
   * @example
   * 1
   */
  chatType?: number;
  /**
   * @remarks
   * The data items of the baseline behavior profile for the anomalous activity.
   */
  data?: DescribeEventDetailResponseBodyEventDetailChartData;
  /**
   * @remarks
   * The name of the baseline behavior profile for the anomalous activity.
   * 
   * @example
   * Baseline behavior chart
   */
  label?: string;
  /**
   * @remarks
   * The title of the chart.
   * 
   * > This parameter is returned only when NewAlarm is set to true.
   * 
   * @example
   * misskingm
   */
  name?: string;
  /**
   * @remarks
   * The type of the chart. Valid values:
   * 
   * - **1**: column chart.
   * 
   * - **2**: line chart.
   * 
   * @example
   * 1
   */
  type?: string;
  /**
   * @remarks
   * The label of the x-axis.
   * 
   * @example
   * Number of days
   */
  XLabel?: string;
  /**
   * @remarks
   * The label of the y-axis.
   * 
   * @example
   * Value
   */
  YLabel?: string;
  /**
   * @remarks
   * The label of the z-axis.
   * 
   * > This parameter is returned only when NewAlarm is set to true.
   * 
   * @example
   * chart description
   */
  ZLabel?: string;
  static names(): { [key: string]: string } {
    return {
      chatType: 'ChatType',
      data: 'Data',
      label: 'Label',
      name: 'Name',
      type: 'Type',
      XLabel: 'XLabel',
      YLabel: 'YLabel',
      ZLabel: 'ZLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatType: 'number',
      data: DescribeEventDetailResponseBodyEventDetailChartData,
      label: 'string',
      name: 'string',
      type: 'string',
      XLabel: 'string',
      YLabel: 'string',
      ZLabel: 'string',
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

export class DescribeEventDetailResponseBodyEventDetailContent extends $dara.Model {
  /**
   * @remarks
   * The title of the anomalous activity content.
   * 
   * @example
   * Anomaly description
   */
  label?: string;
  /**
   * @remarks
   * The name of the anomalous activity.
   * 
   * @example
   * daliaoyuncom
   */
  name?: string;
  /**
   * @remarks
   * The description of the anomalous activity content.
   * 
   * @example
   * The account was used to access OSS from an unusual terminal whose IP address is 1.2.3.4 from 00:06:45 on September 9, 2019 to 00:57:37 on September 9, 2019.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      name: 'string',
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

export class DescribeEventDetailResponseBodyEventDetailResourceInfo extends $dara.Model {
  /**
   * @remarks
   * The title of the source of the anomalous activity.
   * 
   * @example
   * Risk
   */
  label?: string;
  /**
   * @remarks
   * The description of the source of the anomalous activity.
   * 
   * @example
   * Based on the record of authentication by using an unusual terminal, an attacker may have obtained the access permission of the account, or an employee accessed data from a personal terminal.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
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

export class DescribeEventDetailResponseBodyEventDetail extends $dara.Model {
  /**
   * @remarks
   * The baseline behavior profile for the anomalous activity.
   */
  chart?: DescribeEventDetailResponseBodyEventDetailChart[];
  /**
   * @remarks
   * The content of the anomalous activity.
   */
  content?: DescribeEventDetailResponseBodyEventDetailContent[];
  /**
   * @remarks
   * The information about the source of the anomalous activity.
   */
  resourceInfo?: DescribeEventDetailResponseBodyEventDetailResourceInfo[];
  static names(): { [key: string]: string } {
    return {
      chart: 'Chart',
      content: 'Content',
      resourceInfo: 'ResourceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chart: { 'type': 'array', 'itemType': DescribeEventDetailResponseBodyEventDetailChart },
      content: { 'type': 'array', 'itemType': DescribeEventDetailResponseBodyEventDetailContent },
      resourceInfo: { 'type': 'array', 'itemType': DescribeEventDetailResponseBodyEventDetailResourceInfo },
    };
  }

  validate() {
    if(Array.isArray(this.chart)) {
      $dara.Model.validateArray(this.chart);
    }
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    if(Array.isArray(this.resourceInfo)) {
      $dara.Model.validateArray(this.resourceInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventDetailResponseBodyEventHandleInfoList extends $dara.Model {
  /**
   * @remarks
   * Specifies the account that handled the event.
   * 
   * @example
   * sddp-test2
   */
  currentValue?: string;
  /**
   * @remarks
   * The time when the handling action was disabled. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1611139155000
   */
  disableTime?: number;
  /**
   * @remarks
   * The time when the handling action was enabled. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1611139155000
   */
  enableTime?: number;
  /**
   * @remarks
   * The handling method.
   * 
   * @example
   * Remove from the whitelist
   */
  handlerName?: string;
  /**
   * @remarks
   * The handling type.
   * 
   * @example
   * rds_security_ip
   */
  handlerType?: string;
  /**
   * @remarks
   * The duration of the handling action. Unit: minutes. If this parameter is empty, the handling action is permanent.
   * 
   * @example
   * 10
   */
  handlerValue?: number;
  /**
   * @remarks
   * The handling ID.
   * 
   * @example
   * 11
   */
  id?: number;
  /**
   * @remarks
   * The status of the handling action. Valid values:
   * 
   * - **0**: disabled.
   * 
   * - **1**: enabled.
   * 
   * - **-1**: disabling failed.
   * 
   * - **-2**: enabling failed.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      currentValue: 'CurrentValue',
      disableTime: 'DisableTime',
      enableTime: 'EnableTime',
      handlerName: 'HandlerName',
      handlerType: 'HandlerType',
      handlerValue: 'HandlerValue',
      id: 'Id',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentValue: 'string',
      disableTime: 'number',
      enableTime: 'number',
      handlerName: 'string',
      handlerType: 'string',
      handlerValue: 'number',
      id: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventDetailResponseBodyEvent extends $dara.Model {
  /**
   * @remarks
   * The time when the alert for the anomalous activity was triggered. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1545829129000
   */
  alertTime?: number;
  /**
   * @remarks
   * Indicates whether the detection of the anomalous activity is enhanced. Valid values:
   * 
   * - **true**: yes.
   * 
   * - **false**: no.
   * 
   * > Enhancing the detection of anomalous activities improves detection accuracy and the alert reporting rate.
   * 
   * @example
   * false
   */
  backed?: boolean;
  /**
   * @remarks
   * The name of the asset instance in which the anomalous activity occurred.
   * 
   * @example
   * in-222***
   */
  dataInstance?: string;
  /**
   * @remarks
   * The display name of the account that handled the anomalous activity.
   * 
   * @example
   * yundunsr
   */
  dealDisplayName?: string;
  /**
   * @remarks
   * The logon name of the account that handled the anomalous activity.
   * 
   * @example
   * det1111
   */
  dealLoginName?: string;
  /**
   * @remarks
   * The reason for handling the anomalous activity.
   * 
   * @example
   * Anomaly confirmed
   */
  dealReason?: string;
  /**
   * @remarks
   * The time when the anomalous activity was handled. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1611139155000
   */
  dealTime?: number;
  /**
   * @remarks
   * The ID of the account that handled the anomalous activity.
   * 
   * @example
   * 229157443385014***
   */
  dealUserId?: number;
  /**
   * @remarks
   * The specific content of the anomalous activity details.
   */
  detail?: DescribeEventDetailResponseBodyEventDetail;
  /**
   * @remarks
   * The display name of the account that performed the operation.
   * 
   * @example
   * yundunsr
   */
  displayName?: string;
  /**
   * @remarks
   * The time when the anomalous activity occurred. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1545829129000
   */
  eventTime?: number;
  /**
   * @remarks
   * The handling history.
   */
  handleInfoList?: DescribeEventDetailResponseBodyEventHandleInfoList[];
  /**
   * @remarks
   * The unique ID of the anomalous activity that is recorded in Data Security Center.
   * 
   * @example
   * 52234
   */
  id?: number;
  /**
   * @remarks
   * The details of the alert log.
   * 
   * @example
   * {"client_ip": ["106.11.XX.XX", "106.11.XX.XX", "106.11.XX.XX", "106.11.XX.XX", "106.11.XX.XX", "106.11.XX.XX", "106.11.XX.XX", "106.11.XX.XX", "106.11.XX.XX"], "start_time": "2020-05-10 00:00:01", "instance": ["omniscience-data", "punish-beaver-data"], "end_time": "2020-05-10 00:21:22", "client_ua": ["Java/1.8.0_152", "Java/1.8.0_92", "aliyun-sdk-java/2.0.0", "aliyun-sdk-java/2.8.0(Linux/4.9.151-015.ali3000.alios7.x86_64/amd64;1.8.0_152)"], "user_name": 1512222261295262}
   */
  logDetail?: string;
  /**
   * @remarks
   * The name of the account that performed the operation.
   * 
   * @example
   * det1111
   */
  loginName?: string;
  /**
   * @remarks
   * Indicates whether the alert is of the new version. Valid values:
   * 
   * - **true**: yes.
   * 
   * - **false**: no.
   * 
   * @example
   * true
   */
  newAlarm?: boolean;
  /**
   * @remarks
   * The name of the product in which the anomalous activity is detected. Valid values include **MaxCompute, OSS, ADS, OTS, and RDS**.
   * 
   * @example
   * MaxCompute
   */
  productCode?: string;
  /**
   * @remarks
   * The processing status of the anomalous activity. Valid values:
   * 
   * - **0**: unhandled.
   * 
   * - **1**: confirmed.
   * 
   * - **2**: dismissed.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The name of the processing status of the anomalous activity.
   * 
   * @example
   * Pending
   */
  statusName?: string;
  /**
   * @remarks
   * The code of the anomalous activity subtype.
   * 
   * @example
   * 020008
   */
  subTypeCode?: string;
  /**
   * @remarks
   * The name of the anomalous activity subtype.
   * 
   * @example
   * Anomalous volume of downloaded data
   */
  subTypeName?: string;
  /**
   * @remarks
   * The code of the anomalous activity type.
   * 
   * @example
   * 02
   */
  typeCode?: string;
  /**
   * @remarks
   * The name of the anomalous activity type. Valid values:
   * 
   * - **01**: anomalous permission access.
   * 
   * - **02**: anomalous data flow.
   * 
   * - **03**: anomalous data operation.
   * 
   * @example
   * Anomalous data flow
   */
  typeName?: string;
  /**
   * @remarks
   * The ID of the account that performed the operation.
   * 
   * @example
   * 229157443385014***
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      alertTime: 'AlertTime',
      backed: 'Backed',
      dataInstance: 'DataInstance',
      dealDisplayName: 'DealDisplayName',
      dealLoginName: 'DealLoginName',
      dealReason: 'DealReason',
      dealTime: 'DealTime',
      dealUserId: 'DealUserId',
      detail: 'Detail',
      displayName: 'DisplayName',
      eventTime: 'EventTime',
      handleInfoList: 'HandleInfoList',
      id: 'Id',
      logDetail: 'LogDetail',
      loginName: 'LoginName',
      newAlarm: 'NewAlarm',
      productCode: 'ProductCode',
      status: 'Status',
      statusName: 'StatusName',
      subTypeCode: 'SubTypeCode',
      subTypeName: 'SubTypeName',
      typeCode: 'TypeCode',
      typeName: 'TypeName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTime: 'number',
      backed: 'boolean',
      dataInstance: 'string',
      dealDisplayName: 'string',
      dealLoginName: 'string',
      dealReason: 'string',
      dealTime: 'number',
      dealUserId: 'number',
      detail: DescribeEventDetailResponseBodyEventDetail,
      displayName: 'string',
      eventTime: 'number',
      handleInfoList: { 'type': 'array', 'itemType': DescribeEventDetailResponseBodyEventHandleInfoList },
      id: 'number',
      logDetail: 'string',
      loginName: 'string',
      newAlarm: 'boolean',
      productCode: 'string',
      status: 'number',
      statusName: 'string',
      subTypeCode: 'string',
      subTypeName: 'string',
      typeCode: 'string',
      typeName: 'string',
      userId: 'number',
    };
  }

  validate() {
    if(this.detail && typeof (this.detail as any).validate === 'function') {
      (this.detail as any).validate();
    }
    if(Array.isArray(this.handleInfoList)) {
      $dara.Model.validateArray(this.handleInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the anomalous activity.
   */
  event?: DescribeEventDetailResponseBodyEvent;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 69FB3C1-F4C9-42DF-9B72-7077A8989C13
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      event: 'Event',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: DescribeEventDetailResponseBodyEvent,
      requestId: 'string',
    };
  }

  validate() {
    if(this.event && typeof (this.event as any).validate === 'function') {
      (this.event as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

