// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLiveDomainSchdmByPropertyRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name for which you want to modify the acceleration region.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  ownerId?: number;
  /**
   * @remarks
   * The acceleration region that you want to set. {"coverage":"overseas"} specifies regions outside the Chinese mainland. Valid values of coverage:
   * 
   * *   domestic: regions in the Chinese mainland.
   * *   overseas: regions outside the Chinese mainland.
   * *   global: regions in and outside the Chinese mainland.
   * 
   * This parameter is required.
   * 
   * @example
   * {"coverage":"global"}
   */
  property?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      property: 'Property',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerId: 'number',
      property: 'string',
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

