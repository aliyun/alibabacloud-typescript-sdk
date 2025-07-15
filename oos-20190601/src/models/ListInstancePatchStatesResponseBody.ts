// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancePatchStatesResponseBodyInstancePatchStates extends $dara.Model {
  /**
   * @remarks
   * The ID of the patch baseline.
   * 
   * @example
   * pb-f9393021b7a049e1b34e
   */
  baselineId?: string;
  /**
   * @remarks
   * The number of patches that failed to be installed.
   * 
   * @example
   * 0
   */
  failedCount?: string;
  /**
   * @remarks
   * The number of installed patches.
   * 
   * @example
   * 0
   */
  installedCount?: string;
  /**
   * @remarks
   * The number of patches that do not meet the baseline.
   * 
   * @example
   * 0
   */
  installedOtherCount?: string;
  /**
   * @remarks
   * The number of patches that have been installed but require a restart to take effect.
   * 
   * @example
   * 0
   */
  installedPendingRebootCount?: string;
  /**
   * @remarks
   * The number of patches that are rejected by the user.
   * 
   * @example
   * 0
   */
  installedRejectedCount?: string;
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * i-bp1jaxa2bs4bps7*****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of patches that are not installed.
   * 
   * @example
   * 0
   */
  missingCount?: string;
  /**
   * @remarks
   * The time when the operation ended.
   * 
   * @example
   * 2021-09-10T11:42:22Z
   */
  operationEndTime?: string;
  /**
   * @remarks
   * The time when the operation was initiated.
   * 
   * @example
   * 2021-09-10T11:42:22Z
   */
  operationStartTime?: string;
  /**
   * @remarks
   * The operation type.
   * 
   * @example
   * scan
   */
  operationType?: string;
  /**
   * @remarks
   * The information about the user.
   * 
   * @example
   * “”
   */
  ownerInformation?: string;
  /**
   * @remarks
   * The patch group.
   * 
   * @example
   * null
   */
  patchGroup?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      failedCount: 'FailedCount',
      installedCount: 'InstalledCount',
      installedOtherCount: 'InstalledOtherCount',
      installedPendingRebootCount: 'InstalledPendingRebootCount',
      installedRejectedCount: 'InstalledRejectedCount',
      instanceId: 'InstanceId',
      missingCount: 'MissingCount',
      operationEndTime: 'OperationEndTime',
      operationStartTime: 'OperationStartTime',
      operationType: 'OperationType',
      ownerInformation: 'OwnerInformation',
      patchGroup: 'PatchGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'string',
      failedCount: 'string',
      installedCount: 'string',
      installedOtherCount: 'string',
      installedPendingRebootCount: 'string',
      installedRejectedCount: 'string',
      instanceId: 'string',
      missingCount: 'string',
      operationEndTime: 'string',
      operationStartTime: 'string',
      operationType: 'string',
      ownerInformation: 'string',
      patchGroup: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancePatchStatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of patches of the instance.
   */
  instancePatchStates?: ListInstancePatchStatesResponseBodyInstancePatchStates[];
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * -
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9A47C086-E64D-52EE-8B2C-EFD23877C55E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instancePatchStates: 'InstancePatchStates',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instancePatchStates: { 'type': 'array', 'itemType': ListInstancePatchStatesResponseBodyInstancePatchStates },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instancePatchStates)) {
      $dara.Model.validateArray(this.instancePatchStates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

