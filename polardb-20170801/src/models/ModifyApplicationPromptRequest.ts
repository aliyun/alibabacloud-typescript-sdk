// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApplicationPromptRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. Usage note: Only applications of the mem0 type support prompt operations. You can verify this by checking the ApplicationType field by calling DescribeApplicationAttribute.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The prompt ID. The value is an identifier that starts with papt-.
   * 
   * This parameter is required.
   * 
   * @example
   * papt-f9lajgw765f4fnrzn1
   */
  promptId?: string;
  /**
   * @remarks
   * The prompt name.
   * 
   * @example
   * prompt name
   */
  promptName?: string;
  /**
   * @remarks
   * The prompt content.
   * 
   * @example
   * prompt value
   */
  promptValue?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      promptId: 'PromptId',
      promptName: 'PromptName',
      promptValue: 'PromptValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      promptId: 'string',
      promptName: 'string',
      promptValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

