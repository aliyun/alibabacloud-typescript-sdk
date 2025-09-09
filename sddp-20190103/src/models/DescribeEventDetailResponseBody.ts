// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventDetailResponseBodyEventDetailChartData extends $dara.Model {
  /**
   * @remarks
   * The value of the data item on the X axis.
   * 
   * @example
   * [test1,test2,...]
   */
  x?: string[];
  /**
   * @remarks
   * The value of the data item on the Y axis.
   * 
   * @example
   * [1,2,3,...]
   */
  y?: string[];
  /**
   * @remarks
   * The value of the data item for the Z axis.
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
   * *   **1**: column chart
   * *   **2**: line chart
   * 
   * >This field will be returned only when NewAlarm is true.
   * 
   * @example
   * 1
   */
  chatType?: number;
  /**
   * @remarks
   * The data in the baseline behavior profile of the anomalous event.
   */
  data?: DescribeEventDetailResponseBodyEventDetailChartData;
  /**
   * @remarks
   * The name of the baseline behavior chart of the anomalous event.
   * 
   * @example
   * Baseline behavior chart
   */
  label?: string;
  /**
   * @remarks
   * Icon title.
   * 
   * >This field will be returned only when NewAlarm is true.
   * 
   * @example
   * misskingm
   */
  name?: string;
  /**
   * @remarks
   * The type of the chart. Valid values:
   * 
   * *   **1**: column chart
   * *   **2**: line chart
   * 
   * @example
   * 1
   */
  type?: string;
  /**
   * @remarks
   * The descriptive label of data items on the X axis.
   * 
   * @example
   * Number of days
   */
  XLabel?: string;
  /**
   * @remarks
   * The descriptive label of data items on the Y axis.
   * 
   * @example
   * Value
   */
  YLabel?: string;
  /**
   * @remarks
   * The descriptive label of data items on the Z axis.
   * 
   * >This field will be returned only when NewAlarm is true.
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
   * The title of the content in the anomalous event.
   * 
   * @example
   * Anomaly description
   */
  label?: string;
  /**
   * @remarks
   * Exception event name.
   * 
   * @example
   * daliaoyuncom
   */
  name?: string;
  /**
   * @remarks
   * The description of the content in the anomalous event.
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
   * The source title.
   * 
   * @example
   * Risk
   */
  label?: string;
  /**
   * @remarks
   * The source description.
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
   * The baseline behavior chart of the anomalous event.
   */
  chart?: DescribeEventDetailResponseBodyEventDetailChart[];
  /**
   * @remarks
   * The content in the anomalous event.
   */
  content?: DescribeEventDetailResponseBodyEventDetailContent[];
  /**
   * @remarks
   * An array that consists of the source from which the information of the anomalous event is recorded.
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
   * The account that is used to handle the anomalous event.
   * 
   * @example
   * sddp-test2
   */
  currentValue?: string;
  /**
   * @remarks
   * The time when the account is disabled. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1611139155000
   */
  disableTime?: number;
  /**
   * @remarks
   * The time when the disabled account is enabled. The value is a UNIX timestamp. Unit: milliseconds.
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
   * The type of the handling method.
   * 
   * @example
   * rds_security_ip
   */
  handlerType?: string;
  /**
   * @remarks
   * The duration for which the handling operation takes effect. If you leave this parameter empty, the handling operation is permanently valid. Unit: minutes.
   * 
   * @example
   * 10
   */
  handlerValue?: number;
  /**
   * @remarks
   * The ID of the handling rule.
   * 
   * @example
   * 11
   */
  id?: number;
  /**
   * @remarks
   * The status of the account that triggered the anomalous event. Valid values:
   * 
   * *   **0**: disabled
   * *   **1**: enabled
   * *   **-1**: failed to disable the account
   * *   **-2**: failed to enable the account
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
   * The time when the alert for the anomalous event was generated. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1545829129000
   */
  alertTime?: number;
  /**
   * @remarks
   * Indicates whether the handling result of the anomalous event is used to enhance the detection of anomalous events. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * > If you enhance the detection of anomalous events, the detection accuracy and the rate of triggering alerts for anomalous events are improved.
   * 
   * @example
   * false
   */
  backed?: boolean;
  /**
   * @remarks
   * The instance name of the service in which the anomalous event was detected.
   * 
   * @example
   * in-222***
   */
  dataInstance?: string;
  /**
   * @remarks
   * The display name of the account that is used to handle the anomalous event.
   * 
   * @example
   * yundunsr
   */
  dealDisplayName?: string;
  /**
   * @remarks
   * The username of the account that is used to handle the anomalous event.
   * 
   * @example
   * det1111
   */
  dealLoginName?: string;
  /**
   * @remarks
   * The reason why the anomalous event is handled.
   * 
   * @example
   * Anomaly confirmed
   */
  dealReason?: string;
  /**
   * @remarks
   * The time when the anomalous event was handled. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1230000
   */
  dealTime?: number;
  /**
   * @remarks
   * The ID of the account that is used to handle the anomalous event.
   * 
   * @example
   * 229157443385014***
   */
  dealUserId?: number;
  /**
   * @remarks
   * The content in the details of the anomalous event.
   */
  detail?: DescribeEventDetailResponseBodyEventDetail;
  /**
   * @remarks
   * The display name of the account that triggered the anomalous event.
   * 
   * @example
   * yundunsr
   */
  displayName?: string;
  /**
   * @remarks
   * The time when the anomalous event occurred. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1545829129000
   */
  eventTime?: number;
  /**
   * @remarks
   * An array that consists of the handling records of the anomalous event.
   */
  handleInfoList?: DescribeEventDetailResponseBodyEventHandleInfoList[];
  /**
   * @remarks
   * The unique ID of the anomalous event.
   * 
   * @example
   * 52234
   */
  id?: number;
  /**
   * @remarks
   * The details of the alert logs.
   * 
   * @example
   * {"client_ip": ["106.11.XX.XX", "106.11.XX.XX", "106.11.XX.XX", "106.11.XX.XX", "106.11.XX.XX", "106.11.XX.XX", "106.11.XX.XX", "106.11.XX.XX", "106.11.XX.XX"], "start_time": "2020-05-10 00:00:01", "instance": ["omniscience-data", "punish-beaver-data"], "end_time": "2020-05-10 00:21:22", "client_ua": ["Java/1.8.0_152", "Java/1.8.0_92", "aliyun-sdk-java/2.0.0", "aliyun-sdk-java/2.8.0(Linux/4.9.151-015.ali3000.alios7.x86_64/amd64;1.8.0_152)"], "user_name": 1512222261295262}
   */
  logDetail?: string;
  /**
   * @remarks
   * The username of the account that triggered the anomalous event.
   * 
   * @example
   * det1111
   */
  loginName?: string;
  /**
   * @remarks
   * Whether it is a new version of the alarm. Value:
   * - **true**: Yes. 
   * - **false**: No.
   * 
   * @example
   * true
   */
  newAlarm?: boolean;
  /**
   * @remarks
   * The name of the service in which the anomalous event was detected. Valid values include **MaxCompute, OSS, ADS, OTS, and RDS**.
   * 
   * @example
   * MaxCompute
   */
  productCode?: string;
  /**
   * @remarks
   * The handling status for the anomalous event. Valid values:
   * 
   * *   **0**: unhandled
   * *   **1**: confirmed
   * *   **2**: marked as false positive
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The name of the handling status for the anomalous event.
   * 
   * @example
   * Pending
   */
  statusName?: string;
  /**
   * @remarks
   * The code of the anomalous event subtype.
   * 
   * @example
   * 020008
   */
  subTypeCode?: string;
  /**
   * @remarks
   * The name of the anomalous event subtype.
   * 
   * @example
   * Anomalous volume of downloaded data
   */
  subTypeName?: string;
  /**
   * @remarks
   * The code of the anomalous event type.
   * 
   * @example
   * 02
   */
  typeCode?: string;
  /**
   * @remarks
   * The name of the anomalous event type. Valid values:
   * 
   * *   **01**: anomalous permission usage
   * *   **02**: anomalous data flow
   * *   **03**: anomalous data operation
   * 
   * @example
   * Anomalous data flow
   */
  typeName?: string;
  /**
   * @remarks
   * The ID of the account that triggered the anomalous event.
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
   * The details of the anomalous event.
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

