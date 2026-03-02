// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EngineVersionMetadata } from "./EngineVersionMetadata";


export class EngineVersionMetadataIndex extends $dara.Model {
  /**
   * @remarks
   * The default engine version that is used for a deployment.
   * 
   * @example
   * vvr-6.0.1-flink-1.15
   */
  defaultEngineVersion?: string;
  /**
   * @remarks
   * The information about all supported engine versions.
   */
  engineVersionMetadata?: EngineVersionMetadata[];
  static names(): { [key: string]: string } {
    return {
      defaultEngineVersion: 'defaultEngineVersion',
      engineVersionMetadata: 'engineVersionMetadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultEngineVersion: 'string',
      engineVersionMetadata: { 'type': 'array', 'itemType': EngineVersionMetadata },
    };
  }

  validate() {
    if(Array.isArray(this.engineVersionMetadata)) {
      $dara.Model.validateArray(this.engineVersionMetadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

