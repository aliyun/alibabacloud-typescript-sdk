// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetIdpMetadataRequest extends $dara.Model {
  /**
   * @remarks
   * The office network ID, which has the same meaning as `OfficeSiteId`. We recommend that you stop using `DirectoryId` and use `OfficeSiteId` instead. You can specify only one of `DirectoryId` and `OfficeSiteId`, not both.
   * 
   * @example
   * cn-hangzhou+dir-400695****
   */
  directoryId?: string;
  /**
   * @remarks
   * The metadata of the identity provider (IdP).
   * 
   * This parameter is required.
   * 
   * @example
   * &lt;EntityDescriptor ID********Descriptor&gt;
   */
  idpMetadata?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-hangzhou+dir-400695****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](~~DescribeRegions~~) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      idpMetadata: 'IdpMetadata',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      idpMetadata: 'string',
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

