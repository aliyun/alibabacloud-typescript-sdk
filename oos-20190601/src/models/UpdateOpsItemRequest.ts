// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOpsItemRequest extends $dara.Model {
  /**
   * @remarks
   * The category.
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
   * DASKJJLKADS-AHKLJHJSAKL-AJK
   */
  clientToken?: string;
  /**
   * @remarks
   * The string to be deduplicated.
   * 
   * @example
   * ecs_instance_SystemMaintenance.Reboot
   */
  dedupString?: string;
  /**
   * @remarks
   * The description of the O\\&M item.
   * 
   * @example
   * test-update
   */
  description?: string;
  /**
   * @remarks
   * The ID of the O\\&M item.
   * 
   * @example
   * oi-e2264dcf040c472598e9
   */
  opsItemId?: string;
  /**
   * @remarks
   * The priority.
   * 
   * @example
   * 2
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
   * The Alibaba Resource Names (ARNs) of the associated resources.
   * 
   * @example
   * [\\"arn:acs:ecs:cn-heyuan:1139354755361920:instance/i-f8z928h7aqotd3o65032\\"]
   */
  resources?: string;
  /**
   * @remarks
   * The severity level.
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
   * [{\\n \\\\"priority\\\\":3,\\n \\\\"type\\\\":\\\\"url\\\\",\\n \\\\"url\\\\":\\\\"https://example.com\\\\",\\n \\\\"description\\\\":\\\\"Specify a cross-zone high availability cluster. \\\\"\\n}]
   */
  solutions?: string;
  /**
   * @remarks
   * The source business.
   * 
   * @example
   * /aliyun/ecs
   */
  source?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * Open
   */
  status?: string;
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
   * @example
   * Test
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      clientToken: 'ClientToken',
      dedupString: 'DedupString',
      description: 'Description',
      opsItemId: 'OpsItemId',
      priority: 'Priority',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resources: 'Resources',
      severity: 'Severity',
      solutions: 'Solutions',
      source: 'Source',
      status: 'Status',
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
      opsItemId: 'string',
      priority: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resources: 'string',
      severity: 'string',
      solutions: 'string',
      source: 'string',
      status: 'string',
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

