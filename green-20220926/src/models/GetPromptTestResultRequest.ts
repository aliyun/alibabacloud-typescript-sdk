// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPromptTestResultRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration item. Note: This parameter is actually required. If it is not provided, the service returns a 400 error (config may not be empty).
   * 
   * @example
   * {\\"enable\\":false}
   */
  config?: string;
  /**
   * @remarks
   * The resource type. Note: This parameter is actually required. If it is not provided, the service returns a 400 error (resourceType may not be empty).
   * 
   * @example
   * image
   */
  resourceType?: string;
  /**
   * @remarks
   * The service code. Note: This parameter is actually required. If it is not provided, the service returns a 400 error (serviceCode may not be empty).
   * 
   * @example
   * baselineCheck
   */
  serviceCode?: string;
  /**
   * @remarks
   * The text content. Note: This parameter is actually required. If it is not provided, the service returns a 400 error.
   * 
   * @example
   * Test text
   */
  text?: string;
  /**
   * @remarks
   * The business type. Note: This parameter is actually required. If it is not provided, the service returns a 400 error.
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

