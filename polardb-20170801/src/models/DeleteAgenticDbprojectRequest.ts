// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAgenticDBProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AgenticDB cluster. The ID must start with pagc-. You can obtain the ID by calling the CreateDBCluster operation and setting AgenticDbType to dedicated. Regular cluster IDs that start with pc- are not supported. Usage notes: Append the following format note to the end of the description for the DBClusterId parameter: The ID must be prefixed with pagc-, and regular PolarDB cluster IDs (prefixed with pc-) are not supported by this API operation.
   * 
   * This parameter is required.
   * 
   * @example
   * pagc-bp1abcdef1234567
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the target project. You can obtain the ID after creating a project by calling CreateAgenticDBProject.
   * 
   * This parameter is required.
   * 
   * @example
   * proj-a1b2c3d4e5f6
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
   * The ID of the tenant. You can obtain the ID after creating a tenant by calling CreateAgenticDBTenant.
   * 
   * This parameter is required.
   * 
   * @example
   * t-4b83e0da66674951
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

