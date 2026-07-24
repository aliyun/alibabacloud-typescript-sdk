// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPromptTestResultRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration item.
   * 
   * @example
   * {\\"enable\\":false}
   */
  config?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * image
   */
  resourceType?: string;
  /**
   * @remarks
   * The service code.
   * 
   * @example
   * baselineCheck
   */
  serviceCode?: string;
  /**
   * @remarks
   * The text content.
   * 
   * @example
   * 测试文本
   */
  text?: string;
  /**
   * @remarks
   * The business type.
   * 
   * @example
   * custom_llm_template
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
      text: 'Text',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      resourceType: 'string',
      serviceCode: 'string',
      text: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

