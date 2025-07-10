// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAlidingAssistantShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  assistantId?: string;
  description?: string;
  extShrink?: string;
  /**
   * @example
   * fallbackContent
   */
  fallbackContent?: string;
  featureShrink?: string;
  /**
   * @example
   * @lADPDetfgMsFFUvNAkjNAkg
   */
  icon?: string;
  instructions?: string;
  name?: string;
  recommendPromptsShrink?: string;
  tenantContextShrink?: string;
  welcomeContent?: string;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'AssistantId',
      description: 'Description',
      extShrink: 'Ext',
      fallbackContent: 'FallbackContent',
      featureShrink: 'Feature',
      icon: 'Icon',
      instructions: 'Instructions',
      name: 'Name',
      recommendPromptsShrink: 'RecommendPrompts',
      tenantContextShrink: 'TenantContext',
      welcomeContent: 'WelcomeContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      description: 'string',
      extShrink: 'string',
      fallbackContent: 'string',
      featureShrink: 'string',
      icon: 'string',
      instructions: 'string',
      name: 'string',
      recommendPromptsShrink: 'string',
      tenantContextShrink: 'string',
      welcomeContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

