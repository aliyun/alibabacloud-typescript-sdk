// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeEngineJobRequest extends $dara.Model {
  computeGroup?: string;
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  jobId?: string;
  jobName?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  startTime?: number;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      computeGroup: 'ComputeGroup',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      jobName: 'JobName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeGroup: 'string',
      endTime: 'number',
      instanceId: 'string',
      jobId: 'string',
      jobName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      startTime: 'number',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

