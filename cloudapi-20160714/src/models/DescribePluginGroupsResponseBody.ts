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

export class DescribePluginGroupsResponseBodyGroupSummarys extends $dara.Model {
  groupPluginSummary?: DescribePluginGroupsResponseBodyGroupSummarysGroupPluginSummary[];
  static names(): { [key: string]: string } {
    return {
      groupPluginSummary: 'GroupPluginSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupPluginSummary: { 'type': 'array', 'itemType': DescribePluginGroupsResponseBodyGroupSummarysGroupPluginSummary },
    };
  }

  validate() {
    if(Array.isArray(this.groupPluginSummary)) {
      $dara.Model.validateArray(this.groupPluginSummary);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Collection of group information
   */
  groupSummarys?: DescribePluginGroupsResponseBodyGroupSummarys;
  /**
   * @remarks
   * Pagination parameter: current page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Pagination parameter: number of items per page, default value 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 765BC99E-F583-5A80-9A42-42AC125C2CDC
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of returned results
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      groupSummarys: 'GroupSummarys',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupSummarys: DescribePluginGroupsResponseBodyGroupSummarys,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.groupSummarys && typeof (this.groupSummarys as any).validate === 'function') {
      (this.groupSummarys as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

