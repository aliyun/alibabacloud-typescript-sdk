// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlidingAssistantShrinkRequest extends $dara.Model {
  appCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  description?: string;
  extShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  icon?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instructions?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  recommendPromptsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  source?: number;
  sourceIdentityId?: string;
  tenantContextShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  welcomeContent?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      description: 'Description',
      extShrink: 'Ext',
      icon: 'Icon',
      instructions: 'Instructions',
      name: 'Name',
      recommendPromptsShrink: 'RecommendPrompts',
      source: 'Source',
      sourceIdentityId: 'SourceIdentityId',
      tenantContextShrink: 'TenantContext',
      welcomeContent: 'WelcomeContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      description: 'string',
      extShrink: 'string',
      icon: 'string',
      instructions: 'string',
      name: 'string',
      recommendPromptsShrink: 'string',
      source: 'number',
      sourceIdentityId: 'string',
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

