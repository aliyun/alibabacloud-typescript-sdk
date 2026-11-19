// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportDriveRequest extends $dara.Model {
  /**
   * @remarks
   * The target UPM domain ID. For workspace scenarios, use the UpmDomainId instead of the NAS file system ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dom-aaaa****
   */
  domainId?: string;
  /**
   * @remarks
   * The target ECD end user ID. The caller account is obtained from the authentication context.
   * 
   * This parameter is required.
   * 
   * @example
   * user01
   */
  endUserId?: string;
  /**
   * @remarks
   * Specifies whether to force an update. Default value: false. If the file already exists and this parameter is set to false, the request fails. If this parameter is set to true, the original DriveId is reused for the update.
   * 
   * @example
   * false
   */
  forceUpdate?: boolean;
  /**
   * @remarks
   * The relative path of the cloud application UPM. It must be the same as the path specified during upload authorization. For cloud desktops, do not pass this parameter or pass an empty value.
   * 
   * @example
   * appv1/ab****
   */
  mountUrl?: string;
  /**
   * @remarks
   * The target platform. Valid values: WINDOWS_10, WINDOWS_11, WINDOWS_SERVER_2019, WINDOWS_SERVER_2022, and WINDOWS_SERVER_2025.
   * 
   * This parameter is required.
   * 
   * @example
   * WINDOWS_SERVER_2025
   */
  platform?: string;
  /**
   * @remarks
   * The region of the target UPM.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'DomainId',
      endUserId: 'EndUserId',
      forceUpdate: 'ForceUpdate',
      mountUrl: 'MountUrl',
      platform: 'Platform',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      endUserId: 'string',
      forceUpdate: 'boolean',
      mountUrl: 'string',
      platform: 'string',
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

