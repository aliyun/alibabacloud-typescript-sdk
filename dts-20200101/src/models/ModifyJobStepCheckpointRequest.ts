// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyJobStepCheckpointRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the migration, synchronization, or tracking task.
   * 
   * @example
   * l5512es7w15****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The task step ID, which corresponds to the **synchronization** step ID returned by the ListJobStep API.
   * 
   * @example
   * wn3z4ukia9wi9xu_0004_0000
   */
  jobStepId?: string;
  /**
   * @remarks
   * The new offset as a UNIX timestamp in seconds. The specified value must fall within the offset range of the incremental data collection step.
   * 
   * @example
   * 1760406***
   */
  newCheckPoint?: number;
  /**
   * @remarks
   * The region where the DTS instance resides.
   * 
   * > For regions that support dedicated clusters, see [DTS dedicated cluster](https://help.aliyun.com/document_detail/417481.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek2ilvoxlrd***
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      jobStepId: 'JobStepId',
      newCheckPoint: 'NewCheckPoint',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      jobStepId: 'string',
      newCheckPoint: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

