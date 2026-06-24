// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The time when an alert was generated for the anomalous activity. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 154529000
   */
  alertTime?: number;
  /**
   * @remarks
   * Indicates whether enhanced detection is enabled for the anomalous activity. Enhanced detection improves detection accuracy and the alert reporting rate.
   * 
   * - true: Enhanced detection is enabled.
   * 
   * - false: Enhanced detection is disabled.
   * 
   * @example
   * false
   */
  backed?: boolean;
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
   * The time when the anomalous activity was handled. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 12223300
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
   * The display name of the account that performed the operation.
   * 
   * @example
   * yundunsr
   */
  displayName?: string;
  /**
   * @remarks
   * The time when the anomalous activity occurred. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1545829129000
   */
  eventTime?: number;
  /**
   * @remarks
   * The unique ID of the anomalous activity that is recorded in Data Security Center (DSC).
   * 
   * @example
   * 42233335555
   */
  id?: number;
  /**
   * @remarks
   * The logon name of the account that performed the operation.
   * 
   * @example
   * det1111
   */
  loginName?: string;
  /**
   * @remarks
   * The service to which the anomalous activity belongs.
   * 
   * @example
   * RDS
   */
  productCode?: string;
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
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The name of the processing status.
   * 
   * @example
   * Pending
   */
  statusName?: string;
  /**
   * @remarks
   * The code of the child type of the anomalous activity.
   * 
   * @example
   * 020008
   */
  subTypeCode?: string;
  /**
   * @remarks
   * The name of the child type of the anomalous activity.
   * 
   * @example
   * Abnormal data download volume
   */
  subTypeName?: string;
  /**
   * @remarks
   * The destination service for the anomalous data flow event.
   * 
   * @example
   * RDS
   */
  targetProductCode?: string;
  /**
   * @remarks
   * The code of the parent type of the anomalous activity.
   * 
   * @example
   * 02
   */
  typeCode?: string;
  /**
   * @remarks
   * The name of the parent type of the anomalous activity.
   * 
   * @example
   * Abnormal data flow
   */
  typeName?: string;
  /**
   * @remarks
   * The ID of the account that performed the operation.
   * 
   * @example
   * 1978132506596***
   */
  userId?: number;
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

export class DescribeEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * A list of anomalous activities.
   */
  items?: DescribeEventsResponseBodyItems[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 12
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 769FB3C1-F4C9-42DF-9B72-7077A8989C13
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeEventsResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

