// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityGroupAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  officeSiteId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      officeSiteId: 'string',
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

