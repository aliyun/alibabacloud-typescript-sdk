// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEdgeFunctionRequestCode extends $dara.Model {
  /**
   * @example
   * code
   */
  ossBucketName?: string;
  /**
   * @example
   * example.zip
   */
  ossObjectName?: string;
  /**
   * @example
   * supabase
   */
  ossType?: string;
  static names(): { [key: string]: string } {
    return {
      ossBucketName: 'OssBucketName',
      ossObjectName: 'OssObjectName',
      ossType: 'OssType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossBucketName: 'string',
      ossObjectName: 'string',
      ossType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeFunctionRequest extends $dara.Model {
  /**
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  code?: CreateEdgeFunctionRequestCode;
  customConfig?: { [key: string]: number };
  /**
   * @example
   * ef-*****
   */
  edgeFunctionName?: string;
  envs?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ra-supabase-8moov5lxba****
   */
  instanceName?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      code: 'Code',
      customConfig: 'CustomConfig',
      edgeFunctionName: 'EdgeFunctionName',
      envs: 'Envs',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      code: CreateEdgeFunctionRequestCode,
      customConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      edgeFunctionName: 'string',
      envs: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      instanceName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(this.code && typeof (this.code as any).validate === 'function') {
      (this.code as any).validate();
    }
    if(this.customConfig) {
      $dara.Model.validateMap(this.customConfig);
    }
    if(this.envs) {
      $dara.Model.validateMap(this.envs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

