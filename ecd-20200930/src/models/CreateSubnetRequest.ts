// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSubnetRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  cidrBlock?: string;
  name?: string;
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
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      name: 'Name',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      name: 'string',
      officeSiteId: 'string',
      regionId: 'string',
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

