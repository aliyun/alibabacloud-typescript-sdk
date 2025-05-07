// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOfficeSitesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 42f6645a-9c3c-4772-be2a-cc5f5732****
   */
  clientId?: string;
  officeSiteId?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      officeSiteId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.officeSiteId)) {
      $dara.Model.validateArray(this.officeSiteId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

