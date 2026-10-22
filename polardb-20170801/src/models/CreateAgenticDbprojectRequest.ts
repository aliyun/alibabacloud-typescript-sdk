// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgenticDBProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AgenticDB cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * pagc-bp1abcdef1234567
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the default branch. Default value: main.
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
   * The retention period for historical data to support creating branches at specific points in time. Default value: 604800 seconds (7 days). Valid values: 3600 to 2592000 seconds (1 hour to 30 days), inclusive. The actual range is subject to the service configuration.
   * 
   * @example
   * 604800
   */
  historyRetentionSeconds?: number;
  /**
   * @remarks
   * The name of the project. The name must be unique within the tenant.
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
   * The ID of the tenant.
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
      historyRetentionSeconds: 'HistoryRetentionSeconds',
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
      historyRetentionSeconds: 'number',
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

