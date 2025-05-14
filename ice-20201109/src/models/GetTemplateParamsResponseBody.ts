// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTemplateParamsResponseBodyParamList } from "./GetTemplateParamsResponseBodyParamList";


export class GetTemplateParamsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried parameters.
   */
  paramList?: GetTemplateParamsResponseBodyParamList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ****2876-6263-4B75-8F2C-CD0F7FCF****
   */
  requestId?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * ******419c8741c1b4325f035b******
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      paramList: 'ParamList',
      requestId: 'RequestId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramList: { 'type': 'array', 'itemType': GetTemplateParamsResponseBodyParamList },
      requestId: 'string',
      templateId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.paramList)) {
      $dara.Model.validateArray(this.paramList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

