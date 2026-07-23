// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpDeliveryHeaderParamValue } from "./HttpDeliveryHeaderParamValue";
import { HttpDeliveryQueryParamValue } from "./HttpDeliveryQueryParamValue";


export class CreateSiteDeliveryTaskRequestHttpDeliveryStandardAuthParam extends $dara.Model {
  /**
   * @remarks
   * The encryption timeout period.
   * 
   * > 
   * > Set this parameter to a value greater than 0. We recommend that you set it to at least 300.
   * 
   * @example
   * 300
   */
  expiredTime?: number;
  /**
   * @remarks
   * The private key.
   * 
   * @example
   * ***
   */
  privateKey?: string;
  /**
   * @remarks
   * The URI path for standard authentication.
   * 
   * @example
   * v1/log/upload
   */
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
  /**
   * @remarks
   * The compression method. By default, no compression is applied.
   * 
   * @example
   * gzip
   */
  compress?: string;
  /**
   * @remarks
   * The delivery URL of the HTTP server.
   * 
   * @example
   * http://xxx.aliyun.com/v1/log/upload
   */
  destUrl?: string;
  /**
   * @remarks
   * The custom header.
   */
  headerParam?: { [key: string]: HttpDeliveryHeaderParamValue };
  lastLogSplit?: boolean;
  /**
   * @remarks
   * The prefix of the log delivery package.
   * 
   * @example
   * cdnVersion:1.0
   */
  logBodyPrefix?: string;
  /**
   * @remarks
   * The suffix of the log delivery package.
   * 
   * @example
   * cdnVersion:1.0
   */
  logBodySuffix?: string;
  logSplit?: boolean;
  logSplitWords?: string;
  /**
   * @remarks
   * The maximum size per delivery batch, in MB.
   * 
   * @example
   * 5
   */
  maxBatchMB?: number;
  /**
   * @remarks
   * The maximum number of entries per delivery batch.
   * 
   * @example
   * 1000
   */
  maxBatchSize?: number;
  /**
   * @remarks
   * The maximum number of retries.
   * 
   * @example
   * 3
   */
  maxRetry?: number;
  /**
   * @remarks
   * The custom request parameter.
   */
  queryParam?: { [key: string]: HttpDeliveryQueryParamValue };
  /**
   * @remarks
   * Specifies whether standard authentication is enabled.
   * 
   * @example
   * true
   */
  standardAuthOn?: boolean;
  /**
   * @remarks
   * The standard authentication parameters.
   */
  standardAuthParam?: CreateSiteDeliveryTaskRequestHttpDeliveryStandardAuthParam;
  /**
   * @remarks
   * The timeout period, in seconds.
   * 
   * @example
   * 10
   */
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
  /**
   * @remarks
   * The load balancing method.
   * 
   * @example
   * kafka.LeastBytes
   */
  balancer?: string;
  /**
   * @remarks
   * The server array.
   */
  brokers?: string[];
  /**
   * @remarks
   * The compression method.
   * 
   * @example
   * lz4
   */
  compress?: string;
  /**
   * @remarks
   * The encryption method.
   * 
   * @example
   * plain
   */
  machanismType?: string;
  /**
   * @remarks
   * The encryption password.
   * 
   * @example
   * ***
   */
  password?: string;
  /**
   * @remarks
   * The Kafka message topic.
   * 
   * @example
   * dqc_test2
   */
  topic?: string;
  useTLS?: boolean;
  /**
   * @remarks
   * Specifies whether user authentication is enabled.
   * 
   * @example
   * true
   */
  userAuth?: boolean;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * xxx
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      balancer: 'Balancer',
      brokers: 'Brokers',
      compress: 'Compress',
      machanismType: 'MachanismType',
      password: 'Password',
      topic: 'Topic',
      useTLS: 'UseTLS',
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
      useTLS: 'boolean',
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
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 1234***
   */
  aliuid?: string;
  /**
   * @remarks
   * The bucket name.
   * 
   * @example
   * test_rlog
   */
  bucketName?: string;
  /**
   * @remarks
   * The prefix of the OSS storage path.
   * 
   * @example
   * test/
   */
  prefixPath?: string;
  /**
   * @remarks
   * The OSS region.
   * 
   * @example
   * cn-shanghai
   */
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
  /**
   * @remarks
   * The AccessKey ID of the Alibaba Cloud account or RAM user.
   * 
   * @example
   * yourAccessKeyID
   */
  accessKey?: string;
  /**
   * @remarks
   * The bucket path.
   * 
   * @example
   * logriver-test/log
   */
  bucketPath?: string;
  /**
   * @remarks
   * The endpoint of the server. This parameter is required when S3Cmpt is set to true.
   * 
   * > For S3-compatible services, configure the domain name resolution by concatenating the bucket and endpoint. For example, if the endpoint is example.com and the bucket is demo, the actual delivery address is demo.example.com.
   * 
   * @example
   * https://s3.oss-cn-hangzhou.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The prefix of the storage path.
   * 
   * @example
   * logriver-test/log
   */
  prefixPath?: string;
  /**
   * @remarks
   * The region where the service resides.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * Specifies whether the service is S3-compatible.
   * 
   * @example
   * true
   */
  s3Cmpt?: boolean;
  /**
   * @remarks
   * The secret key used by the S3 account.
   * 
   * @example
   * LDSIKh***
   */
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
  /**
   * @remarks
   * The name of the Simple Log Service Logstore.
   * 
   * @example
   * accesslog-test
   */
  SLSLogStore?: string;
  /**
   * @remarks
   * The name of the Simple Log Service project.
   * 
   * @example
   * dcdn-test20240417
   */
  SLSProject?: string;
  /**
   * @remarks
   * The region of the Simple Log Service project.
   * 
   * @example
   * cn-hangzhou
   */
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
   * The business type. Valid values:
   * 
   * - **dcdn_log_access_l1** (default): Access logs.
   * - **dcdn_log_er**: Edge Routine logs.
   * - **dcdn_log_waf**: Security protection logs.
   * - **dcdn_log_ipa**: Layer 4 acceleration logs.
   * 
   * This parameter is required.
   * 
   * @example
   * dcdn_log_access_l1
   */
  businessType?: string;
  /**
   * @remarks
   * The data center. Valid values:
   * - **cn**: The Chinese mainland.
   * - **oversea**: Outside the Chinese mainland.
   * 
   * @example
   * cn
   */
  dataCenter?: string;
  /**
   * @remarks
   * The delivery type. Valid values:
   * - **sls**: Simple Log Service.
   * - **http**: HTTP service.
   * - **aws3**: Amazon S3.
   * - **oss**: Object Storage Service (OSS).
   * - **kafka**: Kafka service.
   * - **aws3cmpt**: Amazon S3-compatible service.
   * 
   * This parameter is required.
   * 
   * @example
   * sls
   */
  deliveryType?: string;
  /**
   * @remarks
   * The discard rate. If you do not specify this parameter, the default value is 0.
   * 
   * @example
   * 0.0
   */
  discardRate?: number;
  /**
   * @remarks
   * The log fields to be delivered, separated by commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * user_agent,ip_adress,ip_port
   */
  fieldName?: string;
  filterVer?: string;
  /**
   * @remarks
   * The HTTP delivery configuration parameters.
   */
  httpDelivery?: CreateSiteDeliveryTaskRequestHttpDelivery;
  /**
   * @remarks
   * The Kafka delivery configuration parameters.
   */
  kafkaDelivery?: CreateSiteDeliveryTaskRequestKafkaDelivery;
  /**
   * @remarks
   * The OSS delivery configuration.
   */
  ossDelivery?: CreateSiteDeliveryTaskRequestOssDelivery;
  /**
   * @remarks
   * The configuration parameters for S3 or S3-compatible delivery.
   */
  s3Delivery?: CreateSiteDeliveryTaskRequestS3Delivery;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to query the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12312312112***
   */
  siteId?: number;
  /**
   * @remarks
   * The Simple Log Service delivery configuration.
   */
  slsDelivery?: CreateSiteDeliveryTaskRequestSlsDelivery;
  /**
   * @remarks
   * The name of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * dcdn-test-task
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

