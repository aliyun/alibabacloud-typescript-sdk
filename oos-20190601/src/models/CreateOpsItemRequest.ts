// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOpsItemRequest extends $dara.Model {
  /**
   * @remarks
   * The category.
   * 
   * Valid values:
   * 
   * *   Availability
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Performance
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Security
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Cost
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Recovery
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * This parameter is required.
   * 
   * @example
   * Security
   */
  category?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * 123e56767-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The string to be deduplicated.
   * 
   * @example
   * ecs_instance_Sys
   */
  dedupString?: string;
  /**
   * @remarks
   * The description of the operation.
   * 
   * @example
   * OpsItem
   */
  description?: string;
  /**
   * @remarks
   * The priority. Valid values: 1 to 5. 1 indicates the highest priority.
   * 
   * @example
   * 4
   */
  priority?: number;
  /**
   * @remarks
   * The region ID.
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
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Names (ARNs) of the associated resources.
   * 
   * @example
   * [\\"acs:oos:cn-hangzhou:1563457855438522:application/test-33333/applicationgroup/default-cn-hangzhou-1\\"]
   */
  resources?: string;
  /**
   * @remarks
   * The severity level.
   * 
   * Valid values:
   * 
   * *   High
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Low
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Medium
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Critical
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * This parameter is required.
   * 
   * @example
   * Medium
   */
  severity?: string;
  /**
   * @remarks
   * The solutions.
   * 
   * @example
   * [{\\n \\\\"priority\\\\":3,\\n \\\\"type\\\\":\\\\"SingleAZEcs\\\\",\\n \\\\"url\\\\":\\\\"http://ecs.consle.aliyuncs.com\\\\",\\n \\\\"description\\\\":\\\\"Create Elastic Compute Service (ECS) instances in different zones and import them to an application group.\\\\"\\n}]
   */
  solutions?: string;
  /**
   * @remarks
   * The source business.
   * 
   * This parameter is required.
   * 
   * @example
   * /aliyun/ecs
   */
  source?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {
   *       "k1": "v1",
   *       "k2": "v2"
   * }
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The title of the O\\&M item.
   * 
   * This parameter is required.
   * 
   * @example
   * ECS reboot is scheduled
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      clientToken: 'ClientToken',
      dedupString: 'DedupString',
      description: 'Description',
      priority: 'Priority',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resources: 'Resources',
      severity: 'Severity',
      solutions: 'Solutions',
      source: 'Source',
      tags: 'Tags',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      clientToken: 'string',
      dedupString: 'string',
      description: 'string',
      priority: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resources: 'string',
      severity: 'string',
      solutions: 'string',
      source: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      title: 'string',
    };
  }

  validate() {
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

