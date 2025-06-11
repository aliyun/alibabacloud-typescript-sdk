// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserProvisioningRdAccountStatisticsResponseBodyUserProvisioningStatistics extends $dara.Model {
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
   * The entity ID, which is the ID of the member in the resource directory.
   * 
   * @example
   * 1743382******
   */
  entityId?: string;
  /**
   * @remarks
   * The number of failed RAM user provisioning events.
   * 
   * @example
   * 4
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
   * 1639738******
   */
  ownerPk?: string;
  /**
   * @remarks
   * The entity type. The value is fixed as `RD Account`.
   * 
   * @example
   * RD Account
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

