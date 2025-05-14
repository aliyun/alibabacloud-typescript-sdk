// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTemplatesResponseBodyTemplates extends $dara.Model {
  /**
   * @remarks
   * The access control policy of the template. Valid values:
   * 
   * *   `private`: The template is private.
   * *   `public`: The template is public.
   * *   `shared`: The template can be shared.
   * 
   * Default value: `private`.
   * 
   * @example
   * private
   */
  acl?: string;
  /**
   * @remarks
   * The time when the template was created.
   * 
   * @example
   * 2020-06-10T16:30:16+08:00
   */
  created?: string;
  /**
   * @remarks
   * The description of the template.
   * 
   * @example
   * a web server
   */
  description?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * 874ec485-e7e6-4373-8a3b-47bde8ae789f
   */
  id?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * webserver
   */
  name?: string;
  /**
   * @remarks
   * The label of the template. By default, the value is the name of the template.
   * 
   * @example
   * kubernetes
   */
  tags?: string;
  /**
   * @remarks
   * The template content in the YAML format.
   * 
   * @example
   * apiVersion: apps/v1\\nkind: Deployment\\nmetadata:\\n  name: nginx-deployment-basic\\n  labels:\\n    app: nginx\\nspec:\\n  replicas: 2\\n  selector:\\n    matchLabels:\\n      app: nginx\\n  template:\\n    metadata:\\n      labels:\\n        app: nginx\\n    spec:\\n      containers:\\n      - name: nginx\\n        image: busybox:latest\\n        ports:\\n        - containerPort: 80
   */
  template?: string;
  /**
   * @remarks
   * The type of template. This parameter can be set to a custom value.
   * 
   * *   If the parameter is set to `kubernetes`, the template is displayed on the Templates page in the console.
   * *   If the parameter is set to `compose`, the template is displayed on the Container Service - Swarm page in the console. However, Container Service for Swarm is deprecated.
   * 
   * @example
   * kubernetes
   */
  templateType?: string;
  /**
   * @remarks
   * The ID of the parent template. The value of `template_with_hist_id` is the same for each template version. This allows you to manage different template versions.
   * 
   * @example
   * ad81d115-7c8b-47e7-a222-9c28d7f6e588
   */
  templateWithHistId?: string;
  /**
   * @remarks
   * The time when the template was updated.
   * 
   * @example
   * 2020-06-10T16:30:16+08:00
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

