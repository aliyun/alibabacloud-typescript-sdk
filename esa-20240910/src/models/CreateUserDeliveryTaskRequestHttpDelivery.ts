// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpDeliveryHeaderParamValue } from "./HttpDeliveryHeaderParamValue";
import { HttpDeliveryQueryParamValue } from "./HttpDeliveryQueryParamValue";
import { CreateUserDeliveryTaskRequestHttpDeliveryStandardAuthParam } from "./CreateUserDeliveryTaskRequestHttpDeliveryStandardAuthParam";


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
   * The address of the HTTP server.
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
   * The ending separator.
   * 
   * @example
   * \\n
   */
  lastLogSplit?: string;
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
  logSplit?: string;
  /**
   * @remarks
   * The log separator.
   * 
   * @example
   * \\n
   */
  logSplitWords?: string;
  /**
   * @remarks
   * The maximum backoff time. Unit: milliseconds.
   * 
   * @example
   * 1000
   */
  maxBackoffMS?: number;
  /**
   * @remarks
   * The maximum size of data for each delivery. Unit: MB.
   * 
   * @example
   * 5
   */
  maxBatchMB?: number;
  /**
   * @remarks
   * The maximum number of entries for each delivery.
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
   * The minimum backoff time. Unit: milliseconds.
   * 
   * @example
   * 100
   */
  minBackoffMS?: number;
  /**
   * @remarks
   * The custom query parameters.
   */
  queryParam?: { [key: string]: HttpDeliveryQueryParamValue };
  /**
   * @remarks
   * The response field key used for success check.
   * 
   * @example
   * err_code
   */
  responseBodyKey?: string;
  /**
   * @remarks
   * Specifies whether to use server authentication.
   * 
   * @example
   * true
   */
  standardAuthOn?: boolean;
  /**
   * @remarks
   * The authentication configurations.
   */
  standardAuthParam?: CreateUserDeliveryTaskRequestHttpDeliveryStandardAuthParam;
  /**
   * @remarks
   * The custom code for a success.
   * 
   * @example
   * 200
   */
  successCode?: number;
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
      maxBackoffMS: 'MaxBackoffMS',
      maxBatchMB: 'MaxBatchMB',
      maxBatchSize: 'MaxBatchSize',
      maxRetry: 'MaxRetry',
      minBackoffMS: 'MinBackoffMS',
      queryParam: 'QueryParam',
      responseBodyKey: 'ResponseBodyKey',
      standardAuthOn: 'StandardAuthOn',
      standardAuthParam: 'StandardAuthParam',
      successCode: 'SuccessCode',
      transformTimeout: 'TransformTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compress: 'string',
      destUrl: 'string',
      headerParam: { 'type': 'map', 'keyType': 'string', 'valueType': HttpDeliveryHeaderParamValue },
      lastLogSplit: 'string',
      logBodyPrefix: 'string',
      logBodySuffix: 'string',
      logSplit: 'string',
      logSplitWords: 'string',
      maxBackoffMS: 'number',
      maxBatchMB: 'number',
      maxBatchSize: 'number',
      maxRetry: 'number',
      minBackoffMS: 'number',
      queryParam: { 'type': 'map', 'keyType': 'string', 'valueType': HttpDeliveryQueryParamValue },
      responseBodyKey: 'string',
      standardAuthOn: 'boolean',
      standardAuthParam: CreateUserDeliveryTaskRequestHttpDeliveryStandardAuthParam,
      successCode: 'number',
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

