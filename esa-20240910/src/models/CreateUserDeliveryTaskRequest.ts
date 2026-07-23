// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpDeliveryHeaderParamValue } from "./HttpDeliveryHeaderParamValue";
import { HttpDeliveryQueryParamValue } from "./HttpDeliveryQueryParamValue";


export class CreateUserDeliveryTaskRequestHttpDeliveryStandardAuthParam extends $dara.Model {
  /**
   * @remarks
   * The expiration time.
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
   * xxxx
   */
  privateKey?: string;
  /**
   * @remarks
   * The URL path.
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

export class CreateUserDeliveryTaskRequestHttpDelivery extends $dara.Model {
  /**
   * @remarks
   * The compression method.
   * 
   * @example
   * gzip
   */
  compress?: string;
  /**
   * @remarks
   * The HTTP server delivery URL.
   * 
   * @example
   * http://xxx.aliyun.com/v1/log/upload
   */
  destUrl?: string;
  /**
   * @remarks
   * The custom headers.
   */
  headerParam?: { [key: string]: HttpDeliveryHeaderParamValue };
  /**
   * @remarks
   * The trailing delimiter.
   * 
   * @example
   * \\n
   */
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
  /**
   * @remarks
   * Specifies whether to enable log splitting. Default value: true.
   * 
   * @example
   * true
   */
  logSplit?: boolean;
  /**
   * @remarks
   * The log delimiter.
   * 
   * @example
   * \\n
   */
  logSplitWords?: string;
  /**
   * @remarks
   * The maximum number of bytes per delivery. Unit: MB.
   * 
   * @example
   * 5
   */
  maxBatchMB?: number;
  /**
   * @remarks
   * The maximum number of entries per delivery.
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
   * The custom request parameters.
   */
  queryParam?: { [key: string]: HttpDeliveryQueryParamValue };
  /**
   * @remarks
   * Specifies whether to use standard authentication.
   * 
   * @example
   * true
   */
  standardAuthOn?: boolean;
  /**
   * @remarks
   * The standard authentication parameters.
   */
  standardAuthParam?: CreateUserDeliveryTaskRequestHttpDeliveryStandardAuthParam;
  /**
   * @remarks
   * The timeout period. Unit: seconds.
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
      standardAuthParam: CreateUserDeliveryTaskRequestHttpDeliveryStandardAuthParam,
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

export class CreateUserDeliveryTaskRequestKafkaDelivery extends $dara.Model {
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
   * The compression method. By default, no compression is used.
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
   * xxx
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
   * Specifies whether to enable user authentication.
   * 
   * @example
   * true
   */
  userAuth?: boolean;
  /**
   * @remarks
   * The encryption username.
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

export class CreateUserDeliveryTaskRequestOssDelivery extends $dara.Model {
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
   * The OSS storage path prefix.
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
   * cn-hangzhou
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

export class CreateUserDeliveryTaskRequestS3Delivery extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID of the S3 account.
   * 
   * @example
   * g0f46623ll0g0
   */
  accessKey?: string;
  /**
   * @remarks
   * The bucket storage path.
   * 
   * @example
   * logriver-test/log
   */
  bucketPath?: string;
  /**
   * @remarks
   * The S3 endpoint URL.
   * 
   * @example
   * https://s3.oss-cn-hangzhou.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The storage path prefix.
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
   * cn-shanghai
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
   * The SecretKey of the S3 account.
   * 
   * @example
   * ***
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

export class CreateUserDeliveryTaskRequestSlsDelivery extends $dara.Model {
  /**
   * @remarks
   * The Simple Log Service (SLS) Logstore name.
   * 
   * @example
   * accesslog-test
   */
  SLSLogStore?: string;
  /**
   * @remarks
   * The Simple Log Service (SLS) project name.
   * 
   * @example
   * dcdn-test20240417
   */
  SLSProject?: string;
  /**
   * @remarks
   * The region where Simple Log Service (SLS) resides.
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

export class CreateUserDeliveryTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The real-time log type. Valid values:
   * 
   * - **dcdn_log_access_l1 (default)**: access logs.
   * - **dcdn_log_er**: edge function logs.
   * - **dcdn_log_waf**: security protection logs.
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
   * - **cn**: Chinese mainland.
   * - **sg**: global (excluding the Chinese mainland).
   * 
   * @example
   * cn
   */
  dataCenter?: string;
  /**
   * @remarks
   * The delivery type. Valid values:
   * 
   * - **sls**: Alibaba Cloud Simple Log Service.
   * - **http**: HTTP service.
   * - **aws3**: Amazon S3 service.
   * - **oss**: Alibaba Cloud Object Storage Service.
   * - **kafka**: Kafka service.
   * - **aws3cmpt**: Amazon S3-compatible service.
   * 
   * This parameter is required.
   * 
   * @example
   * sls
   */
  deliveryType?: string;
  details?: string;
  /**
   * @remarks
   * The discard rate. Default value: 0.
   * 
   * @example
   * 0
   */
  discardRate?: number;
  /**
   * @remarks
   * The fields to be selected, separated by commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * user_agent,ip_address,ip_port
   */
  fieldName?: string;
  filterVer?: string;
  /**
   * @remarks
   * The HTTP delivery configuration parameters.
   */
  httpDelivery?: CreateUserDeliveryTaskRequestHttpDelivery;
  /**
   * @remarks
   * The Kafka delivery configuration parameters.
   */
  kafkaDelivery?: CreateUserDeliveryTaskRequestKafkaDelivery;
  /**
   * @remarks
   * The OSS delivery configuration parameters.
   */
  ossDelivery?: CreateUserDeliveryTaskRequestOssDelivery;
  /**
   * @remarks
   * The S3 or S3-compatible delivery configuration parameters.
   */
  s3Delivery?: CreateUserDeliveryTaskRequestS3Delivery;
  /**
   * @remarks
   * The SLS delivery configuration.
   */
  slsDelivery?: CreateUserDeliveryTaskRequestSlsDelivery;
  /**
   * @remarks
   * The task name.
   * 
   * This parameter is required.
   * 
   * @example
   * test_project
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      dataCenter: 'DataCenter',
      deliveryType: 'DeliveryType',
      details: 'Details',
      discardRate: 'DiscardRate',
      fieldName: 'FieldName',
      filterVer: 'FilterVer',
      httpDelivery: 'HttpDelivery',
      kafkaDelivery: 'KafkaDelivery',
      ossDelivery: 'OssDelivery',
      s3Delivery: 'S3Delivery',
      slsDelivery: 'SlsDelivery',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      dataCenter: 'string',
      deliveryType: 'string',
      details: 'string',
      discardRate: 'number',
      fieldName: 'string',
      filterVer: 'string',
      httpDelivery: CreateUserDeliveryTaskRequestHttpDelivery,
      kafkaDelivery: CreateUserDeliveryTaskRequestKafkaDelivery,
      ossDelivery: CreateUserDeliveryTaskRequestOssDelivery,
      s3Delivery: CreateUserDeliveryTaskRequestS3Delivery,
      slsDelivery: CreateUserDeliveryTaskRequestSlsDelivery,
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

