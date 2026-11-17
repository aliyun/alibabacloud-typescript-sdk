// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKyuubiServiceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Kyuubi service specifications.
   * 
   * @example
   * 2c8g
   */
  computeInstance?: string;
  /**
   * @remarks
   * Indicates whether the Kyuubi configuration needs to be updated.
   * 
   * @example
   * true
   */
  configRefreshRequired?: boolean;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1749456094000
   */
  createTime?: string;
  /**
   * @remarks
   * The UID of the creator.
   * 
   * @example
   * 150978934701****
   */
  creator?: string;
  /**
   * @remarks
   * The internal domain name.
   * 
   * @example
   * kyuubi-cn-beijing-internal.spark.emr.aliyuncs.com
   */
  innerEndpoint?: string;
  /**
   * @remarks
   * The Kyuubi service configurations.
   * 
   * @example
   * []
   */
  kyuubiConfigs?: string;
  /**
   * @remarks
   * The Kyuubi service DPI engine version.
   * 
   * @example
   * 1.9.2-0.0.2
   */
  kyuubiReleaseVersion?: string;
  /**
   * @remarks
   * The Kyuubi service ID.
   * 
   * @example
   * kb-4e209b04588***95f04ad3538ae4
   */
  kyuubiServiceId?: string;
  /**
   * @remarks
   * The Kyuubi service name.
   * 
   * @example
   * dev_serverless_spark
   */
  name?: string;
  /**
   * @remarks
   * The public domain name.
   * 
   * @example
   * emr-spark-kyuubi-gateway-cn-beijing.aliyuncs.com
   */
  publicEndpoint?: string;
  /**
   * @remarks
   * Indicates whether public network access is enabled.
   * 
   * @example
   * true
   */
  publicEndpointEnabled?: boolean;
  /**
   * @remarks
   * The queue name.
   * 
   * @example
   * dev_queue
   */
  queue?: string;
  /**
   * @remarks
   * The ready Kyuubi instances.
   * 
   * @example
   * 1
   */
  readyReplicas?: number;
  /**
   * @remarks
   * The Spark DPI engine version.
   * 
   * @example
   * esr-4.6.0 (Spark 3.5.2, Scala 2.12)
   */
  releaseVersion?: string;
  /**
   * @remarks
   * The number of high availability replicas.
   * 
   * @example
   * 0
   */
  replica?: number;
  /**
   * @remarks
   * The Spark configurations.
   * 
   * @example
   * []
   */
  sparkConfigs?: string;
  /**
   * @remarks
   * The start time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1749456094000
   */
  startTime?: string;
  /**
   * @remarks
   * The Kyuubi service state.
   * 
   * @example
   * RUNNING
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      computeInstance: 'computeInstance',
      configRefreshRequired: 'configRefreshRequired',
      createTime: 'createTime',
      creator: 'creator',
      innerEndpoint: 'innerEndpoint',
      kyuubiConfigs: 'kyuubiConfigs',
      kyuubiReleaseVersion: 'kyuubiReleaseVersion',
      kyuubiServiceId: 'kyuubiServiceId',
      name: 'name',
      publicEndpoint: 'publicEndpoint',
      publicEndpointEnabled: 'publicEndpointEnabled',
      queue: 'queue',
      readyReplicas: 'readyReplicas',
      releaseVersion: 'releaseVersion',
      replica: 'replica',
      sparkConfigs: 'sparkConfigs',
      startTime: 'startTime',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeInstance: 'string',
      configRefreshRequired: 'boolean',
      createTime: 'string',
      creator: 'string',
      innerEndpoint: 'string',
      kyuubiConfigs: 'string',
      kyuubiReleaseVersion: 'string',
      kyuubiServiceId: 'string',
      name: 'string',
      publicEndpoint: 'string',
      publicEndpointEnabled: 'boolean',
      queue: 'string',
      readyReplicas: 'number',
      releaseVersion: 'string',
      replica: 'number',
      sparkConfigs: 'string',
      startTime: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKyuubiServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: GetKyuubiServiceResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8CE06D75-E6A2-505D-9B4B-31DEE3D98A04
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetKyuubiServiceResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

