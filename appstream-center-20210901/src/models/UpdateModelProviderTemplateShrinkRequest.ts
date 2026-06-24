// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModelProviderTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The model provider configuration.
   */
  configShrink?: string;
  /**
   * @remarks
   * The description of the model provider template.
   * 
   * @example
   * 阿里云百炼服务商
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable the Wuying security gateway proxy.
   * 
   * @example
   * true
   */
  enableWuyingProxy?: boolean;
  /**
   * @remarks
   * The name of the model provider template.
   * 
   * @example
   * 阿里云百炼
   */
  name?: string;
  /**
   * @remarks
   * The ID of the model provider template.
   * 
   * This parameter is required.
   * 
   * @example
   * mpt-xxxx
   */
  providerTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      configShrink: 'Config',
      description: 'Description',
      enableWuyingProxy: 'EnableWuyingProxy',
      name: 'Name',
      providerTemplateId: 'ProviderTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configShrink: 'string',
      description: 'string',
      enableWuyingProxy: 'boolean',
      name: 'string',
      providerTemplateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

