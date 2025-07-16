// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAlidingAssistantRequestTenantContext extends $dara.Model {
  /**
   * @example
   * xxxxxx
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlidingAssistantRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  assistantId?: string;
  description?: string;
  ext?: { [key: string]: string };
  /**
   * @example
   * fallbackContent
   */
  fallbackContent?: string;
  feature?: { [key: string]: string };
  /**
   * @example
   * @lADPDetfgMsFFUvNAkjNAkg
   */
  icon?: string;
  instructions?: string;
  name?: string;
  recommendPrompts?: string[];
  tenantContext?: UpdateAlidingAssistantRequestTenantContext;
  welcomeContent?: string;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'AssistantId',
      description: 'Description',
      ext: 'Ext',
      fallbackContent: 'FallbackContent',
      feature: 'Feature',
      icon: 'Icon',
      instructions: 'Instructions',
      name: 'Name',
      recommendPrompts: 'RecommendPrompts',
      tenantContext: 'TenantContext',
      welcomeContent: 'WelcomeContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      description: 'string',
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      fallbackContent: 'string',
      feature: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      icon: 'string',
      instructions: 'string',
      name: 'string',
      recommendPrompts: { 'type': 'array', 'itemType': 'string' },
      tenantContext: UpdateAlidingAssistantRequestTenantContext,
      welcomeContent: 'string',
    };
  }

  validate() {
    if(this.ext) {
      $dara.Model.validateMap(this.ext);
    }
    if(this.feature) {
      $dara.Model.validateMap(this.feature);
    }
    if(Array.isArray(this.recommendPrompts)) {
      $dara.Model.validateArray(this.recommendPrompts);
    }
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

