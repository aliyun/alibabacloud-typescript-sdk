// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgenticDBProjectRequest extends $dara.Model {
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
   * The default branch name. Default value: main.
   * 
   * @example
   * main
   */
  defaultBranchName?: string;
  /**
   * @remarks
   * The description of the project.
   * 
   * @example
   * Production analytics database
   */
  description?: string;
  /**
   * @remarks
   * The project name. The name must be unique within the same tenant.
   * 
   * This parameter is required.
   * 
   * @example
   * analytics-prod
   */
  projectName?: string;
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
   * The ID of the tenant to which the project belongs.
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
      defaultBranchName: 'DefaultBranchName',
      description: 'Description',
      projectName: 'ProjectName',
      regionId: 'RegionId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      defaultBranchName: 'string',
      description: 'string',
      projectName: 'string',
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

