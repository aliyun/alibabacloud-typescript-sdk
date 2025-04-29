// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePluginGroupsResponseBodyGroupSummarysGroupPluginSummary extends $dara.Model {
  /**
   * @remarks
   * API root path
   * 
   * @example
   * /rpew
   */
  basePath?: string;
  /**
   * @remarks
   * Description
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * API group ID
   * 
   * @example
   * 4ed31575e2de43de8c51eb1217a1f56b
   */
  groupId?: string;
  /**
   * @remarks
   * API group name
   * 
   * @example
   * ECP_API
   */
  groupName?: string;
  /**
   * @remarks
   * Region ID where the API group is located
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * Stage name Alias
   * 
   * @example
   * DEV
   */
  stageAlias?: string;
  /**
   * @remarks
   * Environment name, possible values:
   * 
   * - **RELEASE**: Production
   * - **PRE**: Pre-release
   * - **TEST**: Testing
   * 
   * @example
   * RELEASE
   */
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      basePath: 'BasePath',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      regionId: 'RegionId',
      stageAlias: 'StageAlias',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basePath: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      regionId: 'string',
      stageAlias: 'string',
      stageName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

