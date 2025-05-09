// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOpsItemResponseBodyOpsItem extends $dara.Model {
  /**
   * @remarks
   * The information about the attributes of the O\\&M item.
   */
  attributes?: { [key: string]: any };
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
   * The user who created the O\\&M item.
   * 
   * @example
   * root(130900000)
   */
  createBy?: string;
  /**
   * @remarks
   * The time when the O\\&M item was created.
   * 
   * @example
   * 2023-04-10T06:15Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test-update
   */
  description?: string;
  /**
   * @remarks
   * The user who last modified the O\\&M item.
   * 
   * @example
   * modifiedBy
   */
  lastModifiedBy?: string;
  /**
   * @remarks
   * The O\\&M item ID.
   * 
   * @example
   * oi-d52b08695e2b46ae8413
   */
  opsItemId?: string;
  /**
   * @remarks
   * The priority of the O\\&M item.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzxkofnlxtn2i
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Names (ARNs) of the associated resources.
   */
  resources?: string[];
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
   * The solutions to the O\\&M item.
   */
  solutions?: { [key: string]: any }[];
  /**
   * @remarks
   * The source business of the O\\&M item.
   * 
   * @example
   * /aliyun/appManager
   */
  source?: string;
  /**
   * @remarks
   * The status of the O\\&M item.
   * 
   * @example
   * Open
   */
  status?: string;
  /**
   * @remarks
   * The tags attached to the O\\&M item.
   * 
   * @example
   * {"K1":"V1"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The title of the O\\&M item.
   * 
   * @example
   * test
   */
  title?: string;
  /**
   * @remarks
   * The time when the O\\&M item was updated.
   * 
   * @example
   * 2023-04-10T06:15Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      category: 'Category',
      createBy: 'CreateBy',
      createDate: 'CreateDate',
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
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      category: 'string',
      createBy: 'string',
      createDate: 'string',
      description: 'string',
      lastModifiedBy: 'string',
      opsItemId: 'string',
      priority: 'number',
      resourceGroupId: 'string',
      resources: { 'type': 'array', 'itemType': 'string' },
      severity: 'string',
      solutions: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      source: 'string',
      status: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      title: 'string',
      updateDate: 'string',
    };
  }

  validate() {
    if(this.attributes) {
      $dara.Model.validateMap(this.attributes);
    }
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    if(Array.isArray(this.solutions)) {
      $dara.Model.validateArray(this.solutions);
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

