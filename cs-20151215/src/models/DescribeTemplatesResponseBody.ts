// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTemplatesResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 20
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 3
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'page_number',
      pageSize: 'page_size',
      totalCount: 'total_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplatesResponseBodyTemplates extends $dara.Model {
  /**
   * @remarks
   * The access permissions for the deployment template. Valid values:
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
   * The time when the orchestration template was created.
   * 
   * @example
   * 2025-04-25T16:56:33+08:00
   */
  created?: string;
  /**
   * @remarks
   * The description of the orchestration template.
   * 
   * @example
   * a web server
   */
  description?: string;
  /**
   * @remarks
   * The ID of the orchestration template.
   * 
   * @example
   * 874ec485-e7e6-4373-8a3b-47bde8******
   */
  id?: string;
  /**
   * @remarks
   * The name of the orchestration template.
   * 
   * @example
   * webserver
   */
  name?: string;
  /**
   * @remarks
   * The tag of the orchestration template. If not explicitly specified, the tag defaults to the template name.
   * 
   * @example
   * kubernetes
   */
  tags?: string;
  /**
   * @remarks
   * The template content in YAML format.
   * 
   * @example
   * apiVersion: apps/v1\\nkind: Deployment\\nmetadata:\\n  name: nginx-deployment-basic\\n  labels:\\n    app: nginx\\nspec:\\n  replicas: 2\\n  selector:\\n    matchLabels:\\n      app: nginx\\n  template:\\n    metadata:\\n      labels:\\n        app: nginx\\n    spec:\\n      containers:\\n      - name: nginx\\n        image: busybox:latest\\n        ports:\\n        - containerPort: 80
   */
  template?: string;
  /**
   * @remarks
   * The templatetype.
   * 
   * - If the value is set to kubernetes, the template is displayed on the Orchestration Templates page in the console.
   * 
   * - If this parameter is left empty or set to other values, the template is not displayed on the Orchestration Templates page in the console.
   * 
   * @example
   * kubernetes
   */
  templateType?: string;
  /**
   * @remarks
   * The ID of the parent template associated with the template. This parameter is used to implement template versioning. Different versions of the same template share the same `template_with_hist_id` value.
   * 
   * @example
   * ad81d115-7c8b-47e7-a222-9c28d7******
   */
  templateWithHistId?: string;
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
      acl: 'acl',
      created: 'created',
      description: 'description',
      id: 'id',
      name: 'name',
      tags: 'tags',
      template: 'template',
      templateType: 'template_type',
      templateWithHistId: 'template_with_hist_id',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: 'string',
      created: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      tags: 'string',
      template: 'string',
      templateType: 'string',
      templateWithHistId: 'string',
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

export class DescribeTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeTemplatesResponseBodyPageInfo;
  /**
   * @remarks
   * The list of templates.
   */
  templates?: DescribeTemplatesResponseBodyTemplates[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'page_info',
      templates: 'templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeTemplatesResponseBodyPageInfo,
      templates: { 'type': 'array', 'itemType': DescribeTemplatesResponseBodyTemplates },
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.templates)) {
      $dara.Model.validateArray(this.templates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

