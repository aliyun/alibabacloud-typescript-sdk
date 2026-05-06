// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModelProviderTemplateShrinkRequest extends $dara.Model {
  configShrink?: string;
  description?: string;
  /**
   * @example
   * true
   */
  enableWuyingProxy?: boolean;
  name?: string;
  /**
   * @remarks
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

