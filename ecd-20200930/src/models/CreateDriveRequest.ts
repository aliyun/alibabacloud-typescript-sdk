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
   * > You can call the DescribeDrives operation to obtain this value.
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
   * > You can call the DescribeDrives operation to obtain this value.
   * 
   * @example
   * 1234****
   */
  externalDomainId?: string;
  /**
   * @remarks
   * > This parameter is deprecated.
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

