// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDriveRequest extends $dara.Model {
  /**
   * @example
   * 1202****
   */
  aliUid?: number;
  /**
   * @example
   * test01
   */
  description?: string;
  /**
   * @example
   * dom-aaaa****
   */
  domainId?: string;
  /**
   * @example
   * test01
   */
  driveName?: string;
  /**
   * @example
   * 1234****
   */
  externalDomainId?: string;
  /**
   * @example
   * -
   */
  profileRoaming?: boolean;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * NAS
   */
  resourceType?: string;
  /**
   * @example
   * USER_PROFILE
   */
  type?: string;
  /**
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

