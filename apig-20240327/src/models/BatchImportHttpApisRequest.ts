// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchImportHttpApisRequestSpecOssConfig extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-bucket
   */
  bucketName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * imports/batch.zip
   */
  objectKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'bucketName',
      objectKey: 'objectKey',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      objectKey: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchImportHttpApisRequest extends $dara.Model {
  allowUpdate?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Http
   */
  apiType?: string;
  dryRun?: boolean;
  /**
   * @example
   * gw-xxx
   */
  gatewayId?: string;
  /**
   * @example
   * rg-xxx
   */
  resourceGroupId?: string;
  /**
   * @example
   * https://oss-cn-hangzhou.aliyuncs.com/my-bucket/imports/batch.zip
   */
  specFileUrl?: string;
  specOssConfig?: BatchImportHttpApisRequestSpecOssConfig;
  /**
   * @example
   * ExistFirst
   */
  strategy?: string;
  withGatewayExtension?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowUpdate: 'allowUpdate',
      apiType: 'apiType',
      dryRun: 'dryRun',
      gatewayId: 'gatewayId',
      resourceGroupId: 'resourceGroupId',
      specFileUrl: 'specFileUrl',
      specOssConfig: 'specOssConfig',
      strategy: 'strategy',
      withGatewayExtension: 'withGatewayExtension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUpdate: 'boolean',
      apiType: 'string',
      dryRun: 'boolean',
      gatewayId: 'string',
      resourceGroupId: 'string',
      specFileUrl: 'string',
      specOssConfig: BatchImportHttpApisRequestSpecOssConfig,
      strategy: 'string',
      withGatewayExtension: 'boolean',
    };
  }

  validate() {
    if(this.specOssConfig && typeof (this.specOssConfig as any).validate === 'function') {
      (this.specOssConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

