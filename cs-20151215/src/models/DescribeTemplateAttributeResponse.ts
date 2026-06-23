// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTemplateAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * 编排模板ID，每次变更都会有一个模板ID。
   * 
   * @example
   * 72d20cf8-a533-4ea9-a10d-e7630d3d****
   */
  id?: string;
  /**
   * @remarks
   * 编排模板的访问权限，取值：
   * 
   * - `private`：私有。
   * - `public`：公共。
   * - `shared`：可共享。
   * 
   * @example
   * private
   */
  acl?: string;
  /**
   * @remarks
   * 编排模板名称。
   * 
   * @example
   * web
   */
  name?: string;
  /**
   * @remarks
   * 编排模板YAML内容。
   * 
   * @example
   * apiVersion: V1\\n***
   */
  template?: string;
  /**
   * @remarks
   * 模板类型。
   * 
   * - 当取值为kubernetes时将在控制台的编排模板页面展示该模板。
   * 
   * - 该参数不填写或者取值为其他值时，控制台的编排模板页面将不会展示该模板。
   * 
   * @example
   * kubernetes
   */
  templateType?: string;
  /**
   * @remarks
   * 编排模板描述信息。
   * 
   * @example
   * test template
   */
  description?: string;
  /**
   * @remarks
   * 部署模板的标签。
   * 
   * @example
   * sa
   */
  tags?: string;
  /**
   * @remarks
   * 编排模板唯一ID，不随模板更新而改变。
   * 
   * @example
   * 874ec485-e7e6-4373-8a3b-47bde8ae****
   */
  templateWithHistId?: string;
  /**
   * @remarks
   * 编排模板创建时间。
   * 
   * @example
   * 2025-04-25T16:56:33+08:00
   */
  created?: string;
  /**
   * @remarks
   * 编排模板更新时间。
   * 
   * @example
   * 2025-04-25T16:56:33+08:00
   */
  updated?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      acl: 'acl',
      name: 'name',
      template: 'template',
      templateType: 'template_type',
      description: 'description',
      tags: 'tags',
      templateWithHistId: 'template_with_hist_id',
      created: 'created',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      acl: 'string',
      name: 'string',
      template: 'string',
      templateType: 'string',
      description: 'string',
      tags: 'string',
      templateWithHistId: 'string',
      created: 'string',
      updated: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplateAttributeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTemplateAttributeResponseBody[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': DescribeTemplateAttributeResponseBody },
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

