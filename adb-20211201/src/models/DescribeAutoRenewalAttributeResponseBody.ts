// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoRenewalAttributeResponseBodyItemsAutoRenewalAttribute extends $dara.Model {
  /**
   * @example
   * true
   */
  autoRenewalEnabled?: boolean;
  /**
   * @example
   * 1
   */
  autoRenewalPeriod?: number;
  /**
   * @example
   * Year
   */
  autoRenewalPeriodUnit?: string;
  /**
   * @example
   * AutoRenewal
   */
  autoRenewalStatus?: string;
  /**
   * @example
   * amv-uf6485635fz8****
   */
  DBClusterId?: string;
  /**
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
  items?: DescribeAutoRenewalAttributeResponseBodyItems;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageRecordCount?: number;
  /**
   * @example
   * BA0F6761-7A8C-59F8-9624-FB56788C0EDF
   */
  requestId?: string;
  /**
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

