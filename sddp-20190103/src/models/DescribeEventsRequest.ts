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
   * The ID of the account that handled the anomalous activity.
   * 
   * @example
   * yundun-***
   */
  dealUserId?: string;
  /**
   * @remarks
   * The time when the detection of the anomalous activity ended. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1698700000
   */
  endTime?: number;
  /**
   * @remarks
   * The unique ID of the anomalous activity.
   * 
   * @example
   * 789026
   */
  id?: number;
  /**
   * @remarks
   * The name of the data asset instance.
   * 
   * @example
   * rm-uf6yzvbc2tg90iuxk.l****
   */
  instanceName?: string;
  /**
   * @remarks
   * The language of the request and response. The default value is **zh_cn**. Valid values:
   * 
   * - **zh_cn**: Chinese.
   * 
   * - **en_us**: English.
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
   * The service to which the data asset belongs. Valid values include MaxCompute, OSS, ADS, OTS, and **RDS**.
   * 
   * @example
   * OSS
   */
  productCode?: string;
  /**
   * @remarks
   * The time when the anomalous activity occurred. This is the start time of the detection. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1657900000
   */
  startTime?: number;
  /**
   * @remarks
   * The processing status of the anomalous activity.
   * 
   * - 0: Unhandled.
   * 
   * - 1: Confirmed.
   * 
   * - 2: Dismissed.
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * The name of the child type of the anomalous activity.
   * 
   * > To query anomalous activities by the child type name, call the **DescribeEventTypes** operation to get the name.
   * 
   * @example
   * Abnormal data download volume
   */
  subTypeCode?: string;
  /**
   * @remarks
   * The destination service for an anomalous data flow event. Valid values include MaxCompute, OSS, ADS, OTS, and **RDS**.
   * 
   * @example
   * RDS
   */
  targetProductCode?: string;
  /**
   * @remarks
   * The code of the parent type of the anomalous activity.
   * 
   * - 01: Anomalous permission access.
   * 
   * - 02: Anomalous data flow.
   * 
   * - 03: Anomalous data operation.
   * 
   * @example
   * 02
   */
  typeCode?: string;
  /**
   * @remarks
   * The ID of the account that performed the operation that triggered the anomalous activity.
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
   * The risk level of the anomalous activity.
   * 
   * - **1**: Low.
   * 
   * - **2**: Medium.
   * 
   * - **3**: High.
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
      endTime: 'number',
      id: 'number',
      instanceName: 'string',
      lang: 'string',
      pageSize: 'number',
      productCode: 'string',
      startTime: 'number',
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

