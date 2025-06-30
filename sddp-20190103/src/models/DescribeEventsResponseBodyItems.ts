// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The time when an alert was triggered for the anomalous event. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 154529000
   */
  alertTime?: number;
  /**
   * @remarks
   * Indicates whether the detection of anomalous events is enhanced. If the detection of anomalous events is enhanced, the detection accuracy and the rate of triggering alerts for anomalous events are improved. Valid values:
   * 
   * *   true: yes
   * *   false: no
   * 
   * @example
   * false
   */
  backed?: boolean;
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
   * The time when the anomalous event was handled. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 12223300
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
   * The ID of the anomalous event.
   * 
   * @example
   * 42233335555
   */
  id?: number;
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
   * The name of the service in which the anomalous event was detected.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The handling status for the anomalous event. Valid values:
   * 
   * *   0: unhandled
   * *   1: confirmed
   * *   2: marked as false positive
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
   * The name of the destination service in an anomalous data flow.
   * 
   * @example
   * RDS
   */
  targetProductCode?: string;
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
   * The name of the anomalous event type.
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
   * 1978132506596***
   */
  userId?: number;
  /**
   * @remarks
   * The severity of the anomalous event.
   * 
   * *   **1**: low
   * *   **2**: medium
   * *   **3**: high
   * 
   * @example
   * 2
   */
  warnLevel?: number;
  static names(): { [key: string]: string } {
    return {
      alertTime: 'AlertTime',
      backed: 'Backed',
      dealDisplayName: 'DealDisplayName',
      dealLoginName: 'DealLoginName',
      dealTime: 'DealTime',
      dealUserId: 'DealUserId',
      displayName: 'DisplayName',
      eventTime: 'EventTime',
      id: 'Id',
      loginName: 'LoginName',
      productCode: 'ProductCode',
      status: 'Status',
      statusName: 'StatusName',
      subTypeCode: 'SubTypeCode',
      subTypeName: 'SubTypeName',
      targetProductCode: 'TargetProductCode',
      typeCode: 'TypeCode',
      typeName: 'TypeName',
      userId: 'UserId',
      warnLevel: 'WarnLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTime: 'number',
      backed: 'boolean',
      dealDisplayName: 'string',
      dealLoginName: 'string',
      dealTime: 'number',
      dealUserId: 'number',
      displayName: 'string',
      eventTime: 'number',
      id: 'number',
      loginName: 'string',
      productCode: 'string',
      status: 'number',
      statusName: 'string',
      subTypeCode: 'string',
      subTypeName: 'string',
      targetProductCode: 'string',
      typeCode: 'string',
      typeName: 'string',
      userId: 'number',
      warnLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

