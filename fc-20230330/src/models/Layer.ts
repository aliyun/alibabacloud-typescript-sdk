// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OutputCodeLocation } from "./OutputCodeLocation";


export class Layer extends $dara.Model {
  /**
   * @remarks
   * The permission of the layer. Valid value: 0 and 1. 0 specifies that the layer is private, and 1 specifies that the layer is public. By default, public layers are public. Custom layers can be set to private or public.
   * 
   * @example
   * 0
   */
  acl?: string;
  /**
   * @remarks
   * The information about the code package of the layer.
   */
  code?: OutputCodeLocation;
  /**
   * @remarks
   * The crc64 verification code of the layer code package, which is calculated based on ECMA-182.
   * 
   * @example
   * 2825179536350****
   */
  codeChecksum?: string;
  /**
   * @remarks
   * The size of the layer code package. Unit: bytes.
   * 
   * @example
   * 421
   */
  codeSize?: number;
  /**
   * @remarks
   * The runtimes that are supported by the layer.
   */
  compatibleRuntime?: string[];
  /**
   * @remarks
   * The time when the layer version was created.
   * 
   * @example
   * 2023-03-30T11:08:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the layer version.
   * 
   * @example
   * My first layer
   */
  description?: string;
  /**
   * @remarks
   * The name of the layer.
   * 
   * This parameter is required.
   * 
   * @example
   * MyLayer
   */
  layerName?: string;
  /**
   * @remarks
   * The name of the resource in the layer version. The name is in the acs:fc:{region}:{accountID}:layers/{layerName}/versions/{layerVersion} format.
   * 
   * @example
   * acs:fc:cn-beijing:186824xxxxxx:layers/fc_layer/versions/1
   */
  layerVersionArn?: string;
  /**
   * @remarks
   * The license agreement.
   * 
   * @example
   * Apache
   */
  license?: string;
  /**
   * @remarks
   * The layer version.
   * 
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

