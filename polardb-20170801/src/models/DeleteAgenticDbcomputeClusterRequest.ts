// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAgenticDBComputeClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The branch ID.
   * 
   * @example
   * br-69f762b1a44f49c487d64b9e71
   */
  branchId?: string;
  /**
   * @remarks
   * The branch compute cluster ID.
   * 
   * @example
   * pc-g0lsayq8c5qe
   */
  computeClusterId?: string;
  /**
   * @remarks
   * The AgenticDB cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pagc-bp1abcdef1234567
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The project ID to which the resource belongs.
   * 
   * @example
   * proj-7140b4c74b3a44978c825bac77
   */
  projectId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * t-51121616fa9e43e98cc90e4afa
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      branchId: 'BranchId',
      computeClusterId: 'ComputeClusterId',
      DBClusterId: 'DBClusterId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchId: 'string',
      computeClusterId: 'string',
      DBClusterId: 'string',
      projectId: 'string',
      regionId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

