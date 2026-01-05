// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0FEEF92D-4052-5202-87D0-3D8EC16F81BF
   */
  requestId?: string;
  /**
   * @remarks
   * The content of the template.
   * 
   * For more information about the template syntax, see [Structure of Terraform templates](https://help.aliyun.com/document_detail/184397.html).
   * 
   * @example
   * {
   *   "ROSTemplateFormatVersion": "2015-09-01",
   *   "Transform": "Aliyun::Terraform-v1.1",
   *   "Workspace": {
   *     "main.tf": "variable  \\"name\\" {  default = \\"auto_provisioning_group\\"}"
   *   },
   *   "Outputs": {}
   * }
   */
  templateBody?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateBody: 'TemplateBody',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateBody: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

