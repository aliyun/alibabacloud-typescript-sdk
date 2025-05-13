// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantPermissionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to grant the permissions with the GRANT option. Valid values: -**true** -**false**
   * 
   * @example
   * false
   */
  grantOption?: boolean;
  /**
   * @remarks
   * The application group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * test.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffcdf01
   */
  namespace?: string;
  /**
   * @remarks
   * The source of the namespace. This parameter is required only for a special third party.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
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
   * The user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 277641081920123456
   */
  userId?: string;
  /**
   * @remarks
   * The username.
   * 
   * This parameter is required.
   * 
   * @example
   * lilei
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      grantOption: 'GrantOption',
      groupId: 'GroupId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantOption: 'boolean',
      groupId: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

