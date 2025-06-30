// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEventDetailResponseBodyEventDetail } from "./DescribeEventDetailResponseBodyEventDetail";
import { DescribeEventDetailResponseBodyEventHandleInfoList } from "./DescribeEventDetailResponseBodyEventHandleInfoList";


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

