// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEdgeFunctionRequestCode extends $dara.Model {
  downloadUrl?: string;
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * code
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The path of the code file.
   * 
   * @example
   * example2.zip
   */
  ossObjectName?: string;
  /**
   * @remarks
   * The storage class of the OSS bucket.
   * 
   * @example
   * supabase
   */
  ossType?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
      ossBucketName: 'OssBucketName',
      ossObjectName: 'OssObjectName',
      ossType: 'OssType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
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

export class UpdateEdgeFunctionRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The error code that is returned if the request failed. For more information, see the "Error codes" section of the topic.
   */
  code?: UpdateEdgeFunctionRequestCode;
  /**
   * @remarks
   * The configuration parameters of the edge function.
   * 
   * @example
   * {}
   */
  customConfig?: { [key: string]: string };
  /**
   * @remarks
   * fc-xxxx
   * 
   * @example
   * ef-****
   */
  edgeFunctionName?: string;
  /**
   * @remarks
   * The environment variables of the edge function.
   */
  envs?: { [key: string]: string };
  /**
   * @remarks
   * The ID of the RDS Supabase instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ra-supabase-8moov5lxba****
   */
  instanceName?: string;
  /**
   * @remarks
   * The region ID.
   * 
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
      code: UpdateEdgeFunctionRequestCode,
      customConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

