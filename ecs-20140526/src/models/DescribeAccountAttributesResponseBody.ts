// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountAttributesResponseBodyAccountAttributeItemsAccountAttributeItemAttributeValuesValueItem extends $dara.Model {
  count?: number;
  diskCategory?: string;
  expiredTime?: string;
  instanceChargeType?: string;
  instanceType?: string;
  value?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      diskCategory: 'DiskCategory',
      expiredTime: 'ExpiredTime',
      instanceChargeType: 'InstanceChargeType',
      instanceType: 'InstanceType',
      value: 'Value',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      diskCategory: 'string',
      expiredTime: 'string',
      instanceChargeType: 'string',
      instanceType: 'string',
      value: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountAttributesResponseBodyAccountAttributeItemsAccountAttributeItemAttributeValues extends $dara.Model {
  valueItem?: DescribeAccountAttributesResponseBodyAccountAttributeItemsAccountAttributeItemAttributeValuesValueItem[];
  static names(): { [key: string]: string } {
    return {
      valueItem: 'ValueItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      valueItem: { 'type': 'array', 'itemType': DescribeAccountAttributesResponseBodyAccountAttributeItemsAccountAttributeItemAttributeValuesValueItem },
    };
  }

  validate() {
    if(Array.isArray(this.valueItem)) {
      $dara.Model.validateArray(this.valueItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountAttributesResponseBodyAccountAttributeItemsAccountAttributeItem extends $dara.Model {
  attributeName?: string;
  attributeValues?: DescribeAccountAttributesResponseBodyAccountAttributeItemsAccountAttributeItemAttributeValues;
  static names(): { [key: string]: string } {
    return {
      attributeName: 'AttributeName',
      attributeValues: 'AttributeValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeName: 'string',
      attributeValues: DescribeAccountAttributesResponseBodyAccountAttributeItemsAccountAttributeItemAttributeValues,
    };
  }

  validate() {
    if(this.attributeValues && typeof (this.attributeValues as any).validate === 'function') {
      (this.attributeValues as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountAttributesResponseBodyAccountAttributeItems extends $dara.Model {
  accountAttributeItem?: DescribeAccountAttributesResponseBodyAccountAttributeItemsAccountAttributeItem[];
  static names(): { [key: string]: string } {
    return {
      accountAttributeItem: 'AccountAttributeItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountAttributeItem: { 'type': 'array', 'itemType': DescribeAccountAttributesResponseBodyAccountAttributeItemsAccountAttributeItem },
    };
  }

  validate() {
    if(Array.isArray(this.accountAttributeItem)) {
      $dara.Model.validateArray(this.accountAttributeItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountAttributesResponseBody extends $dara.Model {
  accountAttributeItems?: DescribeAccountAttributesResponseBodyAccountAttributeItems;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8CE45CD5-31FB-47C2-959D-CA8144CE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountAttributeItems: 'AccountAttributeItems',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountAttributeItems: DescribeAccountAttributesResponseBodyAccountAttributeItems,
      requestId: 'string',
    };
  }

  validate() {
    if(this.accountAttributeItems && typeof (this.accountAttributeItems as any).validate === 'function') {
      (this.accountAttributeItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

