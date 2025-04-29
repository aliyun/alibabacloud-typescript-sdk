// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePluginApisResponseBodyApiSummarysApiPluginSummary extends $dara.Model {
  /**
   * @remarks
   * The API ID.
   * 
   * @example
   * accc8c68b7294b1cb4928741********
   */
  apiId?: string;
  /**
   * @remarks
   * The API name.
   * 
   * @example
   * fhosQueryDayOfStock_V2
   */
  apiName?: string;
  /**
   * @remarks
   * The API description.
   * 
   * @example
   * API description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the API group.
   * 
   * @example
   * 5f51f89261854fd9ad5116be********
   */
  groupId?: string;
  /**
   * @remarks
   * The API group to which the API belongs.
   * 
   * @example
   * myGroup2
   */
  groupName?: string;
  /**
   * @remarks
   * The HTTP method of the API.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * The request path of the API.
   * 
   * @example
   * /mqTest
   */
  path?: string;
  /**
   * @remarks
   * The ID of the region in which the API resides.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The environment alias.
   * 
   * @example
   * Production
   */
  stageAlias?: string;
  /**
   * @remarks
   * The environment to which the API is published. Valid values:
   * 
   * *   **RELEASE**: the production environment
   * *   **PRE**: the pre-release environment
   * *   **TEST**: the test environment
   * 
   * @example
   * RELEASE
   */
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      method: 'Method',
      path: 'Path',
      regionId: 'RegionId',
      stageAlias: 'StageAlias',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      method: 'string',
      path: 'string',
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

