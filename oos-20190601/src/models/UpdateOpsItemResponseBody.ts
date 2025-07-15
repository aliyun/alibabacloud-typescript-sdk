// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOpsItemResponseBodyOpsItem extends $dara.Model {
  /**
   * @remarks
   * The attributes of the O\\&M item.
   * 
   * @example
   * [{\\"Attribute\\": {\\"Weight\\": 100}, \\"RealServer\\": \\"uaejc8hnqzqz5valyh8dibolpvza48ik.yundunwaf5.com\\"}]
   */
  attributes?: string;
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
   * The time when the O\\&M item was created.
   * 
   * @example
   * 2023-03-16T07:04Z
   */
  createDate?: string;
  /**
   * @remarks
   * The user who created the patch baseline.
   * 
   * @example
   * root(130900000)
   */
  createdBy?: string;
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
   * The user who modified the O\\&M item.
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
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxsn4m4******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ARNs of the associated resources.
   */
  resources?: string[];
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
   */
  solutions?: string[];
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
  /**
   * @remarks
   * The time when the O\\&M item was updated.
   * 
   * @example
   * 2023-03-16T08:04Z
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
      resources: { 'type': 'array', 'itemType': 'string' },
      severity: 'string',
      solutions: { 'type': 'array', 'itemType': 'string' },
      source: 'string',
      status: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      title: 'string',
      updateDate: 'string',
    };
  }

  validate() {
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

export class UpdateOpsItemResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the O\\&M item.
   */
  opsItem?: UpdateOpsItemResponseBodyOpsItem;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C996DECB-3D2B-5321-B359-BE7031B6399E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      opsItem: 'OpsItem',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opsItem: UpdateOpsItemResponseBodyOpsItem,
      requestId: 'string',
    };
  }

  validate() {
    if(this.opsItem && typeof (this.opsItem as any).validate === 'function') {
      (this.opsItem as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

