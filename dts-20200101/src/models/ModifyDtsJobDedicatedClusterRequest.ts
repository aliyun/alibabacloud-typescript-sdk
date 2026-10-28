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
   * The task IDs. The value can be a JSON array that contains multiple task IDs. Separate multiple IDs with commas (,).
   * 
   * @example
   * ["dtsxxxx01", "dtsxxx02"]
   */
  dtsJobIds?: string;
  ownerId?: string;
  /**
   * @remarks
   * The region where the DTS instance resides.
   * 
   * > For more information about the regions supported by dedicated clusters, see [DTS dedicated clusters](https://help.aliyun.com/document_detail/417481.html).
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

