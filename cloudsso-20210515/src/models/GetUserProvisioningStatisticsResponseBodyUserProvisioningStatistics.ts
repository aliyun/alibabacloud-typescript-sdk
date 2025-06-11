// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserProvisioningStatisticsResponseBodyUserProvisioningStatistics extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * d-003qew84****
   */
  directoryId?: string;
  /**
   * @remarks
   * The entity ID, which is the ID of the RAM user provisioning.
   * 
   * @example
   * up-002axzhapcbz6e63****
   */
  entityId?: string;
  /**
   * @remarks
   * The number of failed RAM user provisioning events that are associated with the RAM user provisioning.
   * 
   * @example
   * 3
   */
  failedEventCount?: number;
  /**
   * @remarks
   * The time when the RAM user provisioning was last performed.
   * 
   * @example
   * 2022-11-28T03:55:42Z
   */
  latestAsyncTime?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource directory belongs.
   * 
   * @example
   * 139665787317****
   */
  ownerPk?: string;
  /**
   * @remarks
   * The entity type. The value is fixed as `User Provisioning`.
   * 
   * @example
   * User Provisioning
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      entityId: 'EntityId',
      failedEventCount: 'FailedEventCount',
      latestAsyncTime: 'LatestAsyncTime',
      ownerPk: 'OwnerPk',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      entityId: 'string',
      failedEventCount: 'number',
      latestAsyncTime: 'string',
      ownerPk: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

