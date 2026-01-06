// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoRenewalAttributeResponseBodyItemsAutoRenewalAttribute extends $dara.Model {
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled for the cluster. Valid values:
   * 
   * *   **true**: Enables.
   * *   **false**: Disables.
   * 
   * @example
   * true
   */
  autoRenewalEnabled?: boolean;
  /**
   * @remarks
   * The auto-renewal duration.
   * 
   * @example
   * 1
   */
  autoRenewalPeriod?: number;
  /**
   * @remarks
   * The unit of auto-renewal duration. Valid values:
   * 
   * *   **Year**
   * *   **Month**
   * 
   * @example
   * Year
   */
  autoRenewalPeriodUnit?: string;
  /**
   * @remarks
   * The renewal method. Valid values:
   * 
   * *   **AutoRenewal**: The cluster is automatically renewed.
   * *   **Normal**: The cluster is manually renewed. Before the cluster expires, the system sends you a reminder by SMS message.
   * *   **NotRenewal**: The cluster is not renewed. Reminders are only sent three days before cluster expiration.
   * 
   * @example
   * AutoRenewal
   */
  autoRenewalStatus?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * amv-uf6485635fz8****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewalEnabled: 'AutoRenewalEnabled',
      autoRenewalPeriod: 'AutoRenewalPeriod',
      autoRenewalPeriodUnit: 'AutoRenewalPeriodUnit',
      autoRenewalStatus: 'AutoRenewalStatus',
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewalEnabled: 'boolean',
      autoRenewalPeriod: 'number',
      autoRenewalPeriodUnit: 'string',
      autoRenewalStatus: 'string',
      DBClusterId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoRenewalAttributeResponseBodyItems extends $dara.Model {
  autoRenewalAttribute?: DescribeAutoRenewalAttributeResponseBodyItemsAutoRenewalAttribute[];
  static names(): { [key: string]: string } {
    return {
      autoRenewalAttribute: 'AutoRenewalAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewalAttribute: { 'type': 'array', 'itemType': DescribeAutoRenewalAttributeResponseBodyItemsAutoRenewalAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.autoRenewalAttribute)) {
      $dara.Model.validateArray(this.autoRenewalAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoRenewalAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of auto-renewal details.
   */
  items?: DescribeAutoRenewalAttributeResponseBodyItems;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
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
   * BA0F6761-7A8C-59F8-9624-FB56788C0EDF
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
      items: DescribeAutoRenewalAttributeResponseBodyItems,
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

