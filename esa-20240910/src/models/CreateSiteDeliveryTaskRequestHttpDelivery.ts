// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpDeliveryHeaderParamValue } from "./HttpDeliveryHeaderParamValue";
import { HttpDeliveryQueryParamValue } from "./HttpDeliveryQueryParamValue";
import { CreateSiteDeliveryTaskRequestHttpDeliveryStandardAuthParam } from "./CreateSiteDeliveryTaskRequestHttpDeliveryStandardAuthParam";


export class CreateSiteDeliveryTaskRequestHttpDelivery extends $dara.Model {
  /**
   * @remarks
   * The compression method. By default, data is not compressed.
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
   * The custom query parameters.
   */
  queryParam?: { [key: string]: HttpDeliveryQueryParamValue };
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
  standardAuthParam?: CreateSiteDeliveryTaskRequestHttpDeliveryStandardAuthParam;
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
      logBodyPrefix: 'LogBodyPrefix',
      logBodySuffix: 'LogBodySuffix',
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
      logBodyPrefix: 'string',
      logBodySuffix: 'string',
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

