// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOpsItemResponseBodyOpsItem extends $dara.Model {
  /**
   * @remarks
   * The attributes of the O\\&M item.
   * 
   * @example
   * {\\"regionId\\":\\"cn-zhangjiakou\\",\\"appId\\":\\"992BKO1X75GRQ4E8\\",\\"instanceId\\":\\"i-8vbcymxagqsyyyjppbr4\\",\\"instance_name\\":\\"cdae\\"}
   */
  attributes?: string;
  /**
   * @remarks
   * The category of the O\\&M item.
   * 
   * @example
   * Security
   */
  category?: string;
  /**
   * @remarks
   * The time when the O\\&M item was created.
   * 
   * @example
   * 2023-03-24T03:55Z
   */
  createDate?: string;
  /**
   * @remarks
   * The user who created the O\\&M item.
   * 
   * @example
   * root(130900000)
   */
  createdBy?: string;
  /**
   * @remarks
   * The description of the O\\&M item.
   * 
   * @example
   * OpsItem
   */
  description?: string;
  /**
   * @remarks
   * The user who last modified the O\\&M item.
   * 
   * @example
   * root(130900000)
   */
  lastModifiedBy?: string;
  /**
   * @remarks
   * The ID of the O\\&M item.
   * 
   * @example
   * oi-dba9c6eec9254a4d87c1
   */
  opsItemId?: string;
  /**
   * @remarks
   * The priority of the O\\&M item.
   * 
   * @example
   * 2
   */
  priority?: number;
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
   * The ARNs of the associated resources.
   * 
   * @example
   * [\\"acs:oos:cn-hangzhou:1563457855438522:application/dingTest/applicationgroup/fltest\\"]
   */
  resources?: string;
  /**
   * @remarks
   * The severity level of the O\\&M item.
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
   * [{\\n \\\\"priority\\\\":3,\\n \\\\"type\\\\":\\\\"url\\\\",\\n \\\\"url\\\\":\\\\"https://example..com\\\\",\\n \\\\"description\\\\":\\\\"Specify a cross-zone high availability cluster. \\\\"\\n}]
   */
  solutions?: string;
  /**
   * @remarks
   * The source business of the O\\&M item.
   * 
   * @example
   * /aliyun/ecs
   */
  source?: string;
  /**
   * @remarks
   * The state of the O\\&M item.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The tags of the O\\&M item.
   * 
   * @example
   * {"k1": "v1"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The title of the O\\&M item.
   * 
   * @example
   * ECS reboot is scheduled
   */
  title?: string;
  /**
   * @remarks
   * The time when the O\\&M item was updated.
   * 
   * @example
   * 2023-03-24T03:55Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      category: 'Category',
      createDate: 'CreateDate',
      createdBy: 'CreatedBy',
      description: 'Description',
      lastModifiedBy: 'LastModifiedBy',
      opsItemId: 'OpsItemId',
      priority: 'Priority',
      resourceGroupId: 'ResourceGroupId',
      resources: 'Resources',
      severity: 'Severity',
      solutions: 'Solutions',
      source: 'Source',
      status: 'Status',
      tags: 'Tags',
      title: 'Title',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: 'string',
      category: 'string',
      createDate: 'string',
      createdBy: 'string',
      description: 'string',
      lastModifiedBy: 'string',
      opsItemId: 'string',
      priority: 'number',
      resourceGroupId: 'string',
      resources: 'string',
      severity: 'string',
      solutions: 'string',
      source: 'string',
      status: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      title: 'string',
      updateDate: 'string',
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

