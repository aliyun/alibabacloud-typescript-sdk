// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EngineVersionSupportedFeatures } from "./EngineVersionSupportedFeatures";


export class EngineVersionMetadata extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vvr-6.0.0-flink-1.15
   */
  engineVersion?: string;
  features?: EngineVersionSupportedFeatures;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * STABLE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      engineVersion: 'engineVersion',
      features: 'features',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineVersion: 'string',
      features: EngineVersionSupportedFeatures,
      status: 'string',
    };
  }

  validate() {
    if(this.features && typeof (this.features as any).validate === 'function') {
      (this.features as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

