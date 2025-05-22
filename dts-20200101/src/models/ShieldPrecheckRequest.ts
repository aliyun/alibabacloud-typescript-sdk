// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ShieldPrecheckRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the change tracking instance. You can call the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) operation to query the instance ID.
   * 
   * >  You must specify at least one of the **DtsInstanceId** and **DtsJobId** parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * dtsi76118o3w92****
   */
  dtsInstanceId?: string;
  /**
   * @remarks
   * The precheck items that you want to ignore. Separate multiple items with commas (,). Valid values:
   *  
   * *   **CHECK_SAME_OBJ**: schema name conflict
   *  
   * *   **CHECK_SAME_USER**: multiple usernames for one instance
   *  
   * *   **CHECK_SRC**: source database version
   *  
   * *   **CHECK_TOPOLOGY**: topology
   *  
   * > For more information about the topologies supported by DTS, see [Synchronization topologies](https://help.aliyun.com/document_detail/124115.html).
   *  
   * *   **CHECK_SERVER_ID**: value of server_id in the source database
   * 
   * This parameter is required.
   * 
   * @example
   * CHECK_SAME_OBJ
   */
  precheckItems?: string;
  regionId?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      dtsInstanceId: 'DtsInstanceId',
      precheckItems: 'PrecheckItems',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsInstanceId: 'string',
      precheckItems: 'string',
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

