// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLiveDomainSchdmByPropertyRequest extends $dara.Model {
  /**
   * @remarks
   * The live streaming domain for which you want to modify the acceleration region.
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
   * The acceleration region. A value of {"coverage":"overseas"} specifies that the configuration is for regions outside mainland China. The following list describes the valid values for coverage:
   * 
   * - domestic: mainland China.
   * 
   * - overseas: regions outside mainland China.
   * 
   * - global: regions in and outside mainland China.
   * 
   * This parameter is required.
   * 
   * @example
   * {"coverage":"global"}
   */
  property?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
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

