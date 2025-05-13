// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokePermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can obtain the application ID on the Application Management page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * test.defalutGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The unique identifier (UID) of the namespace. You can obtain the namespace UID on the Namespace page in the SchedulerX console.
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
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * The UID of the RAM user.
   * 
   * This parameter is required.
   * 
   * @example
   * 277641081920123456
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
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

