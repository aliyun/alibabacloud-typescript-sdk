// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoRenewAttributeResponseBodyItemsAutoRenewAttribute extends $dara.Model {
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled for the cluster. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  autoRenewEnabled?: boolean;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The renewal duration.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The unit of the renewal duration. Valid values:
   * 
   * *   **Year**
   * *   **Month**
   * 
   * @example
   * Year
   */
  periodUnit?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The renewal status of the cluster. Valid values:
   * 
   * *   **AutoRenewal**: The cluster is automatically renewed.
   * *   **Normal**: The cluster is manually renewed. Before the cluster expires, the system sends you a reminder by SMS message.
   * *   **NotRenewal**: The cluster is not renewed. Three days before the cluster expires, the system sends you a reminder by SMS message to remind you that the cluster is not renewed. However, the system does not send you a reminder when the cluster expires.
   * 
   * @example
   * AutoRenewal
   */
  renewalStatus?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewEnabled: 'AutoRenewEnabled',
      DBClusterId: 'DBClusterId',
      duration: 'Duration',
      periodUnit: 'PeriodUnit',
      regionId: 'RegionId',
      renewalStatus: 'RenewalStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewEnabled: 'boolean',
      DBClusterId: 'string',
      duration: 'number',
      periodUnit: 'string',
      regionId: 'string',
      renewalStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoRenewAttributeResponseBodyItems extends $dara.Model {
  autoRenewAttribute?: DescribeAutoRenewAttributeResponseBodyItemsAutoRenewAttribute[];
  static names(): { [key: string]: string } {
    return {
      autoRenewAttribute: 'AutoRenewAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewAttribute: { 'type': 'array', 'itemType': DescribeAutoRenewAttributeResponseBodyItemsAutoRenewAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.autoRenewAttribute)) {
      $dara.Model.validateArray(this.autoRenewAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoRenewAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The renewal information of the cluster.
   */
  items?: DescribeAutoRenewAttributeResponseBodyItems;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeAutoRenewAttributeResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

