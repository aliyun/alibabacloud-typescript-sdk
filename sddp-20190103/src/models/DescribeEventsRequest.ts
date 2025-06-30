// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the account that handles the anomalous event.
   * 
   * @example
   * yundun-***
   */
  dealUserId?: string;
  /**
   * @remarks
   * The end of the time range during which the anomalous events are detected. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1698700000
   */
  endTime?: string;
  /**
   * @remarks
   * The unique ID of the anomalous event.
   * 
   * @example
   * 789026
   */
  id?: number;
  /**
   * @remarks
   * The name of the data asset.
   * 
   * @example
   * rm-uf6yzvbc2tg90iuxk.l****
   */
  instanceName?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh_cn**. Valid values:
   * 
   * *   **zh_cn**: Chinese
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 12
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the service to which the table belongs. Valid values include **MaxCompute, OSS, ADS, OTS, and RDS**.
   * 
   * @example
   * OSS
   */
  productCode?: string;
  /**
   * @remarks
   * The beginning of the time range during which the anomalous events are detected. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1657900000
   */
  startTime?: string;
  /**
   * @remarks
   * The handling status of the anomalous event. Valid values:
   * 
   * *   0: unhandled
   * *   1: confirmed
   * *   2: marked as false positive
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * The name of the anomalous event subtype.
   * 
   * > You can call the **DescribeEventTypes** operation to query the name of the anomalous event subtype.
   * 
   * @example
   * Anomalous volume of downloaded data
   */
  subTypeCode?: string;
  /**
   * @remarks
   * The name of the destination service in an anomalous data flow. Valid values include **MaxCompute, OSS, ADS, OTS, and RDS**
   * 
   * @example
   * RDS
   */
  targetProductCode?: string;
  /**
   * @remarks
   * The name of the anomalous event type. Valid values:
   * 
   * *   01: anomalous permission usage
   * *   02: anomalous data flow
   * *   03: anomalous data operation
   * 
   * @example
   * 02
   */
  typeCode?: string;
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
   * The username of the RAM user.
   * 
   * @example
   * name
   */
  userName?: string;
  /**
   * @remarks
   * The risk level of the alert that is triggered. Valid values:
   * 
   * *   **1**: low
   * *   **2**: medium
   * *   **3**: high
   * 
   * @example
   * 1
   */
  warnLevel?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      dealUserId: 'DealUserId',
      endTime: 'EndTime',
      id: 'Id',
      instanceName: 'InstanceName',
      lang: 'Lang',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      startTime: 'StartTime',
      status: 'Status',
      subTypeCode: 'SubTypeCode',
      targetProductCode: 'TargetProductCode',
      typeCode: 'TypeCode',
      userId: 'UserId',
      userName: 'UserName',
      warnLevel: 'WarnLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      dealUserId: 'string',
      endTime: 'string',
      id: 'number',
      instanceName: 'string',
      lang: 'string',
      pageSize: 'number',
      productCode: 'string',
      startTime: 'string',
      status: 'string',
      subTypeCode: 'string',
      targetProductCode: 'string',
      typeCode: 'string',
      userId: 'number',
      userName: 'string',
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

