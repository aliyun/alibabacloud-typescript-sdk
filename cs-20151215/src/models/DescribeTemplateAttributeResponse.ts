// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTemplateAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The orchestration template ID. A new ID is generated each time the template is modified.
   * 
   * @example
   * 72d20cf8-a533-4ea9-a10d-e7630d3d****
   */
  id?: string;
  /**
   * @remarks
   * The access permissions of the orchestration template. Valid values:
   * 
   * - `private`: private.
   * - `public`: public.
   * - `shared`: shared.
   * 
   * @example
   * private
   */
  acl?: string;
  /**
   * @remarks
   * The name of the orchestration template.
   * 
   * @example
   * web
   */
  name?: string;
  /**
   * @remarks
   * The YAML content of the orchestration template.
   * 
   * @example
   * apiVersion: V1\\n***
   */
  template?: string;
  /**
   * @remarks
   * The templatetype.
   * 
   * - If the value is kubernetes, the template is displayed on the Orchestration Templates page in the console.
   * 
   * - If this parameter is not set or is set to other values, the template is not displayed on the Orchestration Templates page in the console.
   * 
   * @example
   * kubernetes
   */
  templateType?: string;
  /**
   * @remarks
   * The description of the orchestration template.
   * 
   * @example
   * test template
   */
  description?: string;
  /**
   * @remarks
   * The tags of the deployment template.
   * 
   * @example
   * sa
   */
  tags?: string;
  /**
   * @remarks
   * The unique ID of the orchestration template. This ID does not change when the template is updated.
   * 
   * @example
   * 874ec485-e7e6-4373-8a3b-47bde8ae****
   */
  templateWithHistId?: string;
  /**
   * @remarks
   * The time when the orchestration template was created.
   * 
   * @example
   * 2025-04-25T16:56:33+08:00
   */
  created?: string;
  /**
   * @remarks
   * The time when the orchestration template was last updated.
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

