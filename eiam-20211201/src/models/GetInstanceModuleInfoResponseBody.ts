// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceModuleInfoResponseBodyModuleFeatures extends $dara.Model {
  /**
   * @remarks
   * The identifier of the secondary module.
   * 
   * @example
   * urn:alibaba:idaas:license:module:application:standard:oidc
   */
  featureKey?: string;
  /**
   * @remarks
   * The status of the secondary module.
   * 
   * @example
   * enabled
   */
  featureStatus?: string;
  static names(): { [key: string]: string } {
    return {
      featureKey: 'FeatureKey',
      featureStatus: 'FeatureStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureKey: 'string',
      featureStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceModuleInfoResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The information about the secondary modules.
   */
  features?: GetInstanceModuleInfoResponseBodyModuleFeatures[];
  /**
   * @remarks
   * The identifier of the primary module.
   * 
   * @example
   * urn:alibaba:idaas:license:module:application
   */
  moduleKey?: string;
  /**
   * @remarks
   * The status of the primary module.
   * 
   * @example
   * enabled
   */
  moduleStatus?: string;
  static names(): { [key: string]: string } {
    return {
      features: 'Features',
      moduleKey: 'ModuleKey',
      moduleStatus: 'ModuleStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      features: { 'type': 'array', 'itemType': GetInstanceModuleInfoResponseBodyModuleFeatures },
      moduleKey: 'string',
      moduleStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.features)) {
      $dara.Model.validateArray(this.features);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceModuleInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance information.
   */
  module?: GetInstanceModuleInfoResponseBodyModule;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      module: 'Module',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: GetInstanceModuleInfoResponseBodyModule,
      requestId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

