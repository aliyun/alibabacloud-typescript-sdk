// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyJobStepCheckpointRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data migration, data synchronization, or change tracking task.
   * 
   * @example
   * l5512es7w15****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The ID of the task step, which is the ID of the **synchronization** step returned by the ListJobStep operation.
   * 
   * @example
   * wn3z4ukia9wi9xu_0004_0000
   */
  jobStepId?: string;
  /**
   * @remarks
   * The timestamp in seconds for the new checkpoint. The new checkpoint must be within the timestamp range of the incremental data collection step.
   * 
   * @example
   * 1760406***
   */
  newCheckPoint?: number;
  /**
   * @remarks
   * The region where the DTS instance resides.
   * 
   * > For the regions supported by dedicated clusters, see [DTS dedicated clusters](https://help.aliyun.com/document_detail/417481.html).
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

