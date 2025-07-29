// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTemplateAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the template. When you update a template, a new template ID is generated.
   * 
   * @example
   * 72d20cf8-a533-4ea9-a10d-e7630d3d****
   */
  id?: string;
  /**
   * @remarks
   * The access control policy of the template.
   * 
   * @example
   * private
   */
  acl?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * web
   */
  name?: string;
  /**
   * @remarks
   * The template content in the YAML format.
   * 
   * @example
   * apiVersion: V1\\n***
   */
  template?: string;
  /**
   * @remarks
   * The type of template. The value can be a custom value.
   * 
   * *   If the parameter is set to `kubernetes`, the template is displayed on the Templates page in the console.
   * *   If the parameter is set to `compose`, the template is displayed on the Container Service - Swarm page in the console. Container Service for Swarm is deprecated.
   * *   If the value of the parameter is not `kubernetes`, the template is not displayed on the Templates page in the console. We recommend that you set the parameter to `kubernetes`.
   * 
   * Default value: `kubernetes`.
   * 
   * @example
   * kubernetes
   */
  templateType?: string;
  /**
   * @remarks
   * The description of the template.
   * 
   * @example
   * test template
   */
  description?: string;
  /**
   * @remarks
   * The label of the template.
   * 
   * @example
   * sa
   */
  tags?: string;
  /**
   * @remarks
   * The unique ID of the template. The value remains unchanged after the template is updated.
   * 
   * @example
   * 874ec485-e7e6-4373-8a3b-47bde8ae****
   */
  templateWithHistId?: string;
  /**
   * @remarks
   * The time when the template was created.
   * 
   * @example
   * 2020-09-16T19:21:29+08:00
   */
  created?: string;
  /**
   * @remarks
   * The time when the template was updated.
   * 
   * @example
   * 2020-09-16T19:21:29+08:00
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

