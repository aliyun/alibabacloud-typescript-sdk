// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKyuubiServiceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The specifications of the Kyuubi service.
   * 
   * @example
   * 2c8g
   */
  computeInstance?: string;
  /**
   * @remarks
   * The timestamp when the service was created.
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
   * The internal same-region endpoint.
   * 
   * @example
   * kyuubi-cn-beijing-internal.spark.emr.aliyuncs.com
   */
  innerEndpoint?: string;
  /**
   * @remarks
   * The configuration of the Kyuubi service.
   * 
   * @example
   * []
   */
  kyuubiConfigs?: string;
  /**
   * @remarks
   * The Kyuubi service engine version.
   * 
   * @example
   * 1.9.2-0.0.2
   */
  kyuubiReleaseVersion?: string;
  /**
   * @remarks
   * The ID of the Kyuubi service.
   * 
   * @example
   * kb-4e209b04588***95f04ad3538ae4
   */
  kyuubiServiceId?: string;
  /**
   * @remarks
   * The name of the Kyuubi service.
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
   * The name of the queue.
   * 
   * @example
   * dev_queue
   */
  queue?: string;
  /**
   * @remarks
   * The Spark engine version.
   * 
   * @example
   * esr-4.6.0 (Spark 3.5.2, Scala 2.12)
   */
  releaseVersion?: string;
  /**
   * @remarks
   * The number of high-availability (HA) replicas.
   * 
   * @example
   * 0
   */
  replica?: number;
  /**
   * @remarks
   * The Spark configuration.
   * 
   * @example
   * []
   */
  sparkConfigs?: string;
  /**
   * @remarks
   * The timestamp when the service was started.
   * 
   * @example
   * 1749456094000
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the Kyuubi service.
   * 
   * @example
   * RUNNING
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      computeInstance: 'computeInstance',
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
   * The returned data.
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

