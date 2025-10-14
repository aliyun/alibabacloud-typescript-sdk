// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVendorsRequest extends $dara.Model {
  /**
   * @example
   * en。
   */
  lang?: string;
  /**
   * @example
   * 50。
   * 
   * **if can be null:**
   * true
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****。
   */
  nextToken?: string;
  /**
   * @example
   * cn-hangzhou。
   */
  regionId?: string;
  /**
   * @example
   * 173326*******。
   */
  roleFor?: number;
  vendorIds?: string[];
  /**
   * @example
   * 111。
   */
  vendorName?: string;
  /**
   * @example
   * preset。
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      vendorIds: 'VendorIds',
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
      vendorIds: { 'type': 'array', 'itemType': 'string' },
      vendorName: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vendorIds)) {
      $dara.Model.validateArray(this.vendorIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

