// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVendorsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response message. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return for this request.
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
   * The token that is used to retrieve the next page of results. If this is your first query or if no next page exists, you do not need to specify this parameter. If a next page exists, set the value to the NextToken value that is returned in the last response.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region where the Data Management center for threat analysis is located. Select a region for the Management Hub based on the region where your asset resides. Valid values:
   * 
   * - cn-hangzhou: Your asset is in the Chinese mainland.
   * 
   * - ap-southeast-1: Your asset is outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of a member. An administrator can use this ID to switch to the member\\"s perspective.
   * 
   * @example
   * 173326*******
   */
  roleFor?: number;
  /**
   * @remarks
   * A list of vendors.
   */
  vendorIdsShrink?: string;
  /**
   * @remarks
   * The vendor name.
   * 
   * @example
   * 111
   */
  vendorName?: string;
  /**
   * @remarks
   * The vendor type. Valid values:
   * 
   * - preset
   * 
   * - custom
   * 
   * @example
   * preset
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      vendorIdsShrink: 'VendorIds',
      vendorName: 'VendorName',
      vendorType: 'VendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      roleFor: 'number',
      vendorIdsShrink: 'string',
      vendorName: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

