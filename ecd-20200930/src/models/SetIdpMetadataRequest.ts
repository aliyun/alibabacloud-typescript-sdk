// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetIdpMetadataRequest extends $dara.Model {
  /**
   * @remarks
   * The workspace ID. This parameter is the same as `OfficeSiteId`. We recommend that you use `OfficeSiteId` to replace `DirectoryId`. You can specify only `DirectoryId` or `OfficeSiteId`.
   * 
   * @example
   * cn-hangzhou+dir-400695****
   */
  directoryId?: string;
  /**
   * @remarks
   * The metadata of the IdP.
   * 
   * This parameter is required.
   * 
   * @example
   * &lt;EntityDescriptor ID********Descriptor&gt;
   */
  idpMetadata?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * cn-hangzhou+dir-400695****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The region ID.
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

