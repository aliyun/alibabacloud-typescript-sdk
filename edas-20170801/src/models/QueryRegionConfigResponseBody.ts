// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRegionConfigResponseBodyRegionConfigFileServerConfig extends $dara.Model {
  /**
   * @remarks
   * The Object Storage Service (OSS) bucket of the file server.
   * 
   * @example
   * edas-bj
   */
  bucket?: string;
  /**
   * @remarks
   * The internal endpoint of the file server.
   * 
   * @example
   * oss-cn-beijing-****.aliyuncs.com
   */
  internalUrl?: string;
  /**
   * @remarks
   * The public endpoint of the file server.
   * 
   * @example
   * oss-cn-beijing.aliyuncs.com
   */
  publicUrl?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) endpoint of the file server.
   * 
   * @example
   * v*****-oss-cn-beijing.aliyuncs.com
   */
  vpcUrl?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      internalUrl: 'InternalUrl',
      publicUrl: 'PublicUrl',
      vpcUrl: 'VpcUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      internalUrl: 'string',
      publicUrl: 'string',
      vpcUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRegionConfigResponseBodyRegionConfig extends $dara.Model {
  /**
   * @remarks
   * The domain name of Address Server.
   * 
   * @example
   * ****.edas.aliyun.com
   */
  addressServerHost?: string;
  /**
   * @remarks
   * The installation path of the script for EDAS Agent.
   * 
   * @example
   * http://edas-qd.oss-cn-****-internal.aliyuncs.com/****sh
   */
  agentInstallScript?: string;
  /**
   * @remarks
   * The information about the file server.
   */
  fileServerConfig?: QueryRegionConfigResponseBodyRegionConfigFileServerConfig;
  /**
   * @remarks
   * The type of the file server.
   * 
   * @example
   * oss
   */
  fileServerType?: string;
  /**
   * @remarks
   * The configured ID of the region.
   * 
   * @example
   * cn-beijing
   */
  id?: string;
  /**
   * @remarks
   * The ID of the official image.
   * 
   * @example
   * m-2zea4hx8f9zxqah2****
   */
  imageId?: string;
  /**
   * @remarks
   * The configured name of the region.
   * 
   * @example
   * China (Beijing)
   */
  name?: string;
  /**
   * @remarks
   * The serial number of the region. This parameter is deprecated.
   * 
   * @example
   * 1
   */
  no?: number;
  /**
   * @remarks
   * The tag of the region. The value is fixed to `ALIYUN_SHARE`.
   * 
   * @example
   * ALIYUN_SHARE
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      addressServerHost: 'AddressServerHost',
      agentInstallScript: 'AgentInstallScript',
      fileServerConfig: 'FileServerConfig',
      fileServerType: 'FileServerType',
      id: 'Id',
      imageId: 'ImageId',
      name: 'Name',
      no: 'No',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressServerHost: 'string',
      agentInstallScript: 'string',
      fileServerConfig: QueryRegionConfigResponseBodyRegionConfigFileServerConfig,
      fileServerType: 'string',
      id: 'string',
      imageId: 'string',
      name: 'string',
      no: 'number',
      tag: 'string',
    };
  }

  validate() {
    if(this.fileServerConfig && typeof (this.fileServerConfig as any).validate === 'function') {
      (this.fileServerConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRegionConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The additional information that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The information about region configurations.
   */
  regionConfig?: QueryRegionConfigResponseBodyRegionConfig;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * b197-40ab-9155-7ca7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      regionConfig: 'RegionConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      regionConfig: QueryRegionConfigResponseBodyRegionConfig,
      requestId: 'string',
    };
  }

  validate() {
    if(this.regionConfig && typeof (this.regionConfig as any).validate === 'function') {
      (this.regionConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

