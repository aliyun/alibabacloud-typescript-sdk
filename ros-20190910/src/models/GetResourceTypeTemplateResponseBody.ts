// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceTypeTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 87F54B2B-AEF0-4C33-A72A-3F8856A575E9
   */
  requestId?: string;
  /**
   * @remarks
   * The structure that contains the template body. The template body must be 1 to 51,200 bytes in length. For more information, see [Template syntax](https://help.aliyun.com/document_detail/28857.html).
   * 
   * > We recommend that use TemplateContent instead of TemplateBody.
   * 
   * @example
   * {"ROSTemplateFormatVersion": "2015-09-01"}
   */
  templateBody?: { [key: string]: any };
  /**
   * @remarks
   * The JSON-formatted structure of the template body. For more information, see [Template syntax](https://help.aliyun.com/document_detail/28857.html).
   * 
   * @example
   * {
   *       "ROSTemplateFormatVersion": "2015-09-01"
   * }
   */
  templateContent?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateBody: 'TemplateBody',
      templateContent: 'TemplateContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateBody: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateContent: 'string',
    };
  }

  validate() {
    if(this.templateBody) {
      $dara.Model.validateMap(this.templateBody);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

