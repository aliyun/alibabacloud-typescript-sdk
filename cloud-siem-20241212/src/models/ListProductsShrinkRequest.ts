// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductsShrinkRequest extends $dara.Model {
  lang?: string;
  /**
   * **if can be null:**
   * true
   */
  maxResults?: number;
  nextToken?: string;
  productIdsShrink?: string;
  productName?: string;
  productType?: string;
  regionId?: string;
  roleFor?: number;
  vendorId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      productIdsShrink: 'ProductIds',
      productName: 'ProductName',
      productType: 'ProductType',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      vendorId: 'VendorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      maxResults: 'number',
      nextToken: 'string',
      productIdsShrink: 'string',
      productName: 'string',
      productType: 'string',
      regionId: 'string',
      roleFor: 'number',
      vendorId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

