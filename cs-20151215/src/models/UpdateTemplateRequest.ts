// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the template.
   * 
   * @example
   * web server cluster
   */
  description?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * webserver01
   */
  name?: string;
  /**
   * @remarks
   * The label of the template.
   * 
   * @example
   * web
   */
  tags?: string;
  /**
   * @remarks
   * The YAML content of the template.
   * 
   * @example
   * apiVersion: apps/v1\\\\nkind: Deployment\\\\nmetadata:\\\\n  name: nginx-deployment-basic\\\\n  labels:\\\\n    app: nginx\\\\nspec:\\\\n  replicas: 2\\\\n  selector:\\\\n    matchLabels:\\\\n      app: nginx\\\\n  template:\\\\n    metadata:\\\\n      labels:\\\\n        app: nginx\\\\n    spec:\\\\n      containers:\\\\n      - name: nginx\\\\n        image: busybox:latest\\\\n        ports:\\\\n        - containerPort: 8080
   */
  template?: string;
  /**
   * @remarks
   * The type of template. This parameter can be set to a custom value.
   * 
   * *   If the parameter is set to `kubernetes`, the template is displayed on the Templates page in the console.
   * *   If the parameter is set to `compose`, the template is displayed on the Container Service - Swarm page in the console. Container Service for Swarm is deprecated.
   * 
   * @example
   * kubernetes
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      tags: 'tags',
      template: 'template',
      templateType: 'template_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      tags: 'string',
      template: 'string',
      templateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

