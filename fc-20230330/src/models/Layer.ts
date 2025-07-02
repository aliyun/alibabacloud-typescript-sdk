// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OutputCodeLocation } from "./OutputCodeLocation";


export class Layer extends $dara.Model {
  /**
   * @example
   * 0
   */
  acl?: string;
  code?: OutputCodeLocation;
  /**
   * @example
   * 2825179536350****
   */
  codeChecksum?: string;
  /**
   * @example
   * 421
   */
  codeSize?: number;
  compatibleRuntime?: string[];
  /**
   * @example
   * 2023-03-30T11:08:00Z
   */
  createTime?: string;
  /**
   * @example
   * My first layer
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MyLayer
   */
  layerName?: string;
  /**
   * @example
   * acs:fc:cn-beijing:186824xxxxxx:layers/fc_layer/versions/1
   */
  layerVersionArn?: string;
  /**
   * @example
   * Apache
   */
  license?: string;
  /**
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      acl: 'acl',
      code: 'code',
      codeChecksum: 'codeChecksum',
      codeSize: 'codeSize',
      compatibleRuntime: 'compatibleRuntime',
      createTime: 'createTime',
      description: 'description',
      layerName: 'layerName',
      layerVersionArn: 'layerVersionArn',
      license: 'license',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: 'string',
      code: OutputCodeLocation,
      codeChecksum: 'string',
      codeSize: 'number',
      compatibleRuntime: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      description: 'string',
      layerName: 'string',
      layerVersionArn: 'string',
      license: 'string',
      version: 'number',
    };
  }

  validate() {
    if(this.code && typeof (this.code as any).validate === 'function') {
      (this.code as any).validate();
    }
    if(Array.isArray(this.compatibleRuntime)) {
      $dara.Model.validateArray(this.compatibleRuntime);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

