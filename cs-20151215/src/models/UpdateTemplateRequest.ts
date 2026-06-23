// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the deployment template.
   * 
   * @example
   * web server cluster
   */
  description?: string;
  /**
   * @remarks
   * The name of the deployment template.
   * 
   * @example
   * webserver01
   */
  name?: string;
  /**
   * @remarks
   * The tags of the deployment template.
   * 
   * @example
   * web
   */
  tags?: string;
  /**
   * @remarks
   * The template content in YAML format.
   * 
   * @example
   * apiVersion: apps/v1\\\\nkind: Deployment\\\\nmetadata:\\\\n  name: nginx-deployment-basic\\\\n  labels:\\\\n    app: nginx\\\\nspec:\\\\n  replicas: 2\\\\n  selector:\\\\n    matchLabels:\\\\n      app: nginx\\\\n  template:\\\\n    metadata:\\\\n      labels:\\\\n        app: nginx\\\\n    spec:\\\\n      containers:\\\\n      - name: nginx\\\\n        image: busybox:latest\\\\n        ports:\\\\n        - containerPort: 8080
   */
  template?: string;
  /**
   * @remarks
   * The templatetype.
   * 
   * - If you set this parameter to `kubernetes`, the template is displayed on the Orchestration Templates page in the console.
   * 
   * - If you leave this parameter empty or set it to other values, the template is not displayed on the Orchestration Templates page in the console.
   * 
   * Settings this parameter to `kubernetes` is recommended.
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

