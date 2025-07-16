// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlidingAssistantRequestTenantContext extends $dara.Model {
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

export class CreateAlidingAssistantRequest extends $dara.Model {
  /**
   * @example
   * f5cb37a0fb44441ab7b74c6f4a679dd3
   */
  appCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  description?: string;
  ext?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * @lADPDetfgMsFFUvNAkjNAkg
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
  recommendPrompts?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11
   */
  source?: number;
  /**
   * @example
   * chatBot-123
   */
  sourceIdentityId?: string;
  tenantContext?: CreateAlidingAssistantRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   */
  welcomeContent?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      description: 'Description',
      ext: 'Ext',
      icon: 'Icon',
      instructions: 'Instructions',
      name: 'Name',
      recommendPrompts: 'RecommendPrompts',
      source: 'Source',
      sourceIdentityId: 'SourceIdentityId',
      tenantContext: 'TenantContext',
      welcomeContent: 'WelcomeContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      description: 'string',
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      icon: 'string',
      instructions: 'string',
      name: 'string',
      recommendPrompts: { 'type': 'array', 'itemType': 'string' },
      source: 'number',
      sourceIdentityId: 'string',
      tenantContext: CreateAlidingAssistantRequestTenantContext,
      welcomeContent: 'string',
    };
  }

  validate() {
    if(this.ext) {
      $dara.Model.validateMap(this.ext);
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

