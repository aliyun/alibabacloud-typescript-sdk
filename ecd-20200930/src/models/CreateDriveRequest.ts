// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDriveRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 1202****
   */
  aliUid?: number;
  /**
   * @remarks
   * The description of the user-level storage resource.
   * 
   * @example
   * test01
   */
  description?: string;
  /**
   * @remarks
   * The storage resource ID.
   * > You can obtain this ID by calling the DescribeDrives operation.
   * 
   * @example
   * dom-aaaa****
   */
  domainId?: string;
  /**
   * @remarks
   * The name of the user-level storage resource.
   * 
   * @example
   * test01
   */
  driveName?: string;
  /**
   * @remarks
   * The external storage resource ID.
   * > You can obtain this ID by calling the DescribeDrives operation.
   * 
   * @example
   * 1234****
   */
  externalDomainId?: string;
  /**
   * @remarks
   * The list of image platforms for which to initialize VHDs, such as WINDOWS_SERVER_2025. This parameter applies to UPM binding scenarios such as workspaces, desktop pools, and cloud application delivery groups. If you specify this parameter, the VHDs are initialized based on the specified platforms. If you do not specify this parameter, the original platform derivation rules for each scenario are used.
   * 
   * @example
   * ["WINDOWS_11","WINDOWS_SERVER_2025"]
   */
  platforms?: string[];
  /**
   * @remarks
   * > **[Deprecated]**
   * 
   * @example
   * -
   */
  profileRoaming?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The storage resource type.
   * 
   * @example
   * NAS
   */
  resourceType?: string;
  /**
   * @remarks
   * The purpose of the storage resource.
   * 
   * @example
   * USER_PROFILE
   */
  type?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * user01
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      description: 'Description',
      domainId: 'DomainId',
      driveName: 'DriveName',
      externalDomainId: 'ExternalDomainId',
      platforms: 'Platforms',
      profileRoaming: 'ProfileRoaming',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      description: 'string',
      domainId: 'string',
      driveName: 'string',
      externalDomainId: 'string',
      platforms: { 'type': 'array', 'itemType': 'string' },
      profileRoaming: 'boolean',
      regionId: 'string',
      resourceType: 'string',
      type: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.platforms)) {
      $dara.Model.validateArray(this.platforms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

