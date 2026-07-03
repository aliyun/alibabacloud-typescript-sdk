// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * @example
   * 50
   * 
   * **if can be null:**
   * true
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to start the next query. You do not need to specify this parameter for the first query. For subsequent queries, set this parameter to the \\`NextToken\\` value that is returned from the previous API call.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of product IDs.
   */
  productIdsShrink?: string;
  /**
   * @remarks
   * The product name.
   * 
   * @example
   * sas
   */
  productName?: string;
  /**
   * @remarks
   * The product type. Valid values:
   * 
   * - preset
   * 
   * - custom
   * 
   * @example
   * preset
   */
  productType?: string;
  /**
   * @remarks
   * The region of the Data Management center for threat analysis. Select the region for the Management Hub based on the region where your assets are located. Valid values:
   * 
   * - cn-hangzhou: Your assets are in the Chinese mainland or China (Hong Kong).
   * 
   * - ap-southeast-1: Your assets are in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member. An administrator can specify this parameter to switch to the perspective of this member.
   * 
   * @example
   * 173326*******
   */
  roleFor?: number;
  /**
   * @remarks
   * The vendor ID.
   * 
   * @example
   * vd-qlsw5eocx94w9
   */
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

