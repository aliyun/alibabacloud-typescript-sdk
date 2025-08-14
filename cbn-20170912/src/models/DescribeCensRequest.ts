// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCensRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The key of the filter. Valid values:
   * 
   * *   **CenId**: the ID of a CEN instance.
   * *   **Name**: the name of a CEN instance.
   * 
   * By default, the logical operator among filter conditions is **AND**. Information about a CEN instance is returned only if the CEN instance matches all filter conditions.
   * 
   * You can specify at most five filter conditions in each call.
   * 
   * @example
   * CenId
   */
  key?: string;
  /**
   * @remarks
   * The value of the filter condition.
   * 
   * Specify a filter value based on the **Key** parameter. You can specify multiple values for a filter **key**. The logical operator among multiple filter values is **OR**. If a CEN instance matches one or more of the values that you specify, the CEN instance matches the filter condition.
   * 
   * You can specify at most five values in each filter condition.
   * 
   * @example
   * cen-0xyeagctz5sfg9****
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCensRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag keys.
   * 
   * The tag keys cannot be an empty string. The tag keys can be up to 64 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * You can specify at most 20 tag keys.
   * 
   * @example
   * tagtest
   */
  key?: string;
  /**
   * @remarks
   * The tag values.
   * 
   * The tag values can be 0 to 128 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * Each tag key must have a unique tag value. You can specify at most 20 tag values in each call.
   * 
   * @example
   * tagtest
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class DescribeCensRequest extends $dara.Model {
  /**
   * @remarks
   * The filter conditions.
   * 
   * You can specify at most five filter conditions in each call.
   */
  filter?: DescribeCensRequestFilter[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **1** to **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group to which the CEN instance belongs.
   * 
   * @example
   * rg-acfm3unpnuw****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags.
   * 
   * You can specify at most 20 tags in each call.
   */
  tag?: DescribeCensRequestTag[];
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': DescribeCensRequestFilter },
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeCensRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

