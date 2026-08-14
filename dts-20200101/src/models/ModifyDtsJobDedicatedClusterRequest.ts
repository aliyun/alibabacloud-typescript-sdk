// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDtsJobDedicatedClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the dedicated cluster.
   * 
   * @example
   * dtsxxxx
   */
  dedicatedClusterId?: string;
  /**
   * @remarks
   * The task ID. You can specify multiple task IDs in a JSON array. Separate the IDs with commas (,).
   * 
   * @example
   * ["dtsxxxx01", "dtsxxx02"]
   */
  dtsJobIds?: string;
  ownerId?: string;
  /**
   * @remarks
   * The region in which the DTS instance resides.
   * 
   * > For the regions supported by dedicated clusters, see [DTS dedicated cluster](https://help.aliyun.com/document_detail/417481.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedClusterId: 'DedicatedClusterId',
      dtsJobIds: 'DtsJobIds',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedClusterId: 'string',
      dtsJobIds: 'string',
      ownerId: 'string',
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

