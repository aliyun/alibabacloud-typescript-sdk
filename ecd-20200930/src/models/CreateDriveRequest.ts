// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDriveRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of your Alibaba Cloud account.
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
   * The ID of the storage resource.
   * 
   * >  Call the DescribeDrives operation to retrieve the storage resource ID.
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
   * The ID of the external storage resource.
   * 
   * >  Call the DescribeDrives operation to retrieve the external storage resource ID.
   * 
   * @example
   * 1234****
   */
  externalDomainId?: string;
  /**
   * @remarks
   * >  This parameter is deprecated.
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
   * The type of the storage resource.
   * 
   * Valid values:
   * 
   * *   NAS: File Storage NAS
   * *   PDS: Drive and Photo Service
   * 
   * @example
   * NAS
   */
  resourceType?: string;
  /**
   * @remarks
   * The usage of the storage resource.
   * 
   * Valid values:
   * 
   * *   DESKTOP: data disk space
   * *   USER_PROFILE: space for personal data of the user
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
      profileRoaming: 'boolean',
      regionId: 'string',
      resourceType: 'string',
      type: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

