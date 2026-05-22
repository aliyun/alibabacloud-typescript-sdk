// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpDeliveryHeaderParamValue } from "./HttpDeliveryHeaderParamValue";
import { HttpDeliveryQueryParamValue } from "./HttpDeliveryQueryParamValue";


export class CreateSiteDeliveryTaskRequestHttpDeliveryStandardAuthParam extends $dara.Model {
  expiredTime?: number;
  privateKey?: string;
  urlPath?: string;
  static names(): { [key: string]: string } {
    return {
      expiredTime: 'ExpiredTime',
      privateKey: 'PrivateKey',
      urlPath: 'UrlPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredTime: 'number',
      privateKey: 'string',
      urlPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteDeliveryTaskRequestHttpDelivery extends $dara.Model {
  compress?: string;
  destUrl?: string;
  headerParam?: { [key: string]: HttpDeliveryHeaderParamValue };
  lastLogSplit?: boolean;
  logBodyPrefix?: string;
  logBodySuffix?: string;
  logSplit?: boolean;
  logSplitWords?: string;
  maxBatchMB?: number;
  maxBatchSize?: number;
  maxRetry?: number;
  queryParam?: { [key: string]: HttpDeliveryQueryParamValue };
  standardAuthOn?: boolean;
  standardAuthParam?: CreateSiteDeliveryTaskRequestHttpDeliveryStandardAuthParam;
  transformTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      compress: 'Compress',
      destUrl: 'DestUrl',
      headerParam: 'HeaderParam',
      lastLogSplit: 'LastLogSplit',
      logBodyPrefix: 'LogBodyPrefix',
      logBodySuffix: 'LogBodySuffix',
      logSplit: 'LogSplit',
      logSplitWords: 'LogSplitWords',
      maxBatchMB: 'MaxBatchMB',
      maxBatchSize: 'MaxBatchSize',
      maxRetry: 'MaxRetry',
      queryParam: 'QueryParam',
      standardAuthOn: 'StandardAuthOn',
      standardAuthParam: 'StandardAuthParam',
      transformTimeout: 'TransformTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compress: 'string',
      destUrl: 'string',
      headerParam: { 'type': 'map', 'keyType': 'string', 'valueType': HttpDeliveryHeaderParamValue },
      lastLogSplit: 'boolean',
      logBodyPrefix: 'string',
      logBodySuffix: 'string',
      logSplit: 'boolean',
      logSplitWords: 'string',
      maxBatchMB: 'number',
      maxBatchSize: 'number',
      maxRetry: 'number',
      queryParam: { 'type': 'map', 'keyType': 'string', 'valueType': HttpDeliveryQueryParamValue },
      standardAuthOn: 'boolean',
      standardAuthParam: CreateSiteDeliveryTaskRequestHttpDeliveryStandardAuthParam,
      transformTimeout: 'number',
    };
  }

  validate() {
    if(this.headerParam) {
      $dara.Model.validateMap(this.headerParam);
    }
    if(this.queryParam) {
      $dara.Model.validateMap(this.queryParam);
    }
    if(this.standardAuthParam && typeof (this.standardAuthParam as any).validate === 'function') {
      (this.standardAuthParam as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteDeliveryTaskRequestKafkaDelivery extends $dara.Model {
  balancer?: string;
  brokers?: string[];
  compress?: string;
  machanismType?: string;
  password?: string;
  topic?: string;
  userAuth?: boolean;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      balancer: 'Balancer',
      brokers: 'Brokers',
      compress: 'Compress',
      machanismType: 'MachanismType',
      password: 'Password',
      topic: 'Topic',
      userAuth: 'UserAuth',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      balancer: 'string',
      brokers: { 'type': 'array', 'itemType': 'string' },
      compress: 'string',
      machanismType: 'string',
      password: 'string',
      topic: 'string',
      userAuth: 'boolean',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.brokers)) {
      $dara.Model.validateArray(this.brokers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteDeliveryTaskRequestOssDelivery extends $dara.Model {
  aliuid?: string;
  bucketName?: string;
  prefixPath?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      aliuid: 'Aliuid',
      bucketName: 'BucketName',
      prefixPath: 'PrefixPath',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliuid: 'string',
      bucketName: 'string',
      prefixPath: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteDeliveryTaskRequestS3Delivery extends $dara.Model {
  accessKey?: string;
  bucketPath?: string;
  endpoint?: string;
  prefixPath?: string;
  region?: string;
  s3Cmpt?: boolean;
  secretKey?: string;
  serverSideEncryption?: boolean;
  vertifyType?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      bucketPath: 'BucketPath',
      endpoint: 'Endpoint',
      prefixPath: 'PrefixPath',
      region: 'Region',
      s3Cmpt: 'S3Cmpt',
      secretKey: 'SecretKey',
      serverSideEncryption: 'ServerSideEncryption',
      vertifyType: 'VertifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      bucketPath: 'string',
      endpoint: 'string',
      prefixPath: 'string',
      region: 'string',
      s3Cmpt: 'boolean',
      secretKey: 'string',
      serverSideEncryption: 'boolean',
      vertifyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteDeliveryTaskRequestSlsDelivery extends $dara.Model {
  SLSLogStore?: string;
  SLSProject?: string;
  SLSRegion?: string;
  static names(): { [key: string]: string } {
    return {
      SLSLogStore: 'SLSLogStore',
      SLSProject: 'SLSProject',
      SLSRegion: 'SLSRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SLSLogStore: 'string',
      SLSProject: 'string',
      SLSRegion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteDeliveryTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  businessType?: string;
  dataCenter?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  deliveryType?: string;
  discardRate?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  fieldName?: string;
  filterVer?: string;
  httpDelivery?: CreateSiteDeliveryTaskRequestHttpDelivery;
  kafkaDelivery?: CreateSiteDeliveryTaskRequestKafkaDelivery;
  ossDelivery?: CreateSiteDeliveryTaskRequestOssDelivery;
  s3Delivery?: CreateSiteDeliveryTaskRequestS3Delivery;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  slsDelivery?: CreateSiteDeliveryTaskRequestSlsDelivery;
  /**
   * @remarks
   * This parameter is required.
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      dataCenter: 'DataCenter',
      deliveryType: 'DeliveryType',
      discardRate: 'DiscardRate',
      fieldName: 'FieldName',
      filterVer: 'FilterVer',
      httpDelivery: 'HttpDelivery',
      kafkaDelivery: 'KafkaDelivery',
      ossDelivery: 'OssDelivery',
      s3Delivery: 'S3Delivery',
      siteId: 'SiteId',
      slsDelivery: 'SlsDelivery',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      dataCenter: 'string',
      deliveryType: 'string',
      discardRate: 'number',
      fieldName: 'string',
      filterVer: 'string',
      httpDelivery: CreateSiteDeliveryTaskRequestHttpDelivery,
      kafkaDelivery: CreateSiteDeliveryTaskRequestKafkaDelivery,
      ossDelivery: CreateSiteDeliveryTaskRequestOssDelivery,
      s3Delivery: CreateSiteDeliveryTaskRequestS3Delivery,
      siteId: 'number',
      slsDelivery: CreateSiteDeliveryTaskRequestSlsDelivery,
      taskName: 'string',
    };
  }

  validate() {
    if(this.httpDelivery && typeof (this.httpDelivery as any).validate === 'function') {
      (this.httpDelivery as any).validate();
    }
    if(this.kafkaDelivery && typeof (this.kafkaDelivery as any).validate === 'function') {
      (this.kafkaDelivery as any).validate();
    }
    if(this.ossDelivery && typeof (this.ossDelivery as any).validate === 'function') {
      (this.ossDelivery as any).validate();
    }
    if(this.s3Delivery && typeof (this.s3Delivery as any).validate === 'function') {
      (this.s3Delivery as any).validate();
    }
    if(this.slsDelivery && typeof (this.slsDelivery as any).validate === 'function') {
      (this.slsDelivery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

