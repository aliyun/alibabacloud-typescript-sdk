// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKyuubiServiceResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2c8g
   */
  computeInstance?: string;
  /**
   * @example
   * 1749456094000
   */
  createTime?: string;
  /**
   * @example
   * 150978934701****
   */
  creator?: string;
  /**
   * @example
   * kyuubi-cn-beijing-internal.spark.emr.aliyuncs.com
   */
  innerEndpoint?: string;
  /**
   * @example
   * []
   */
  kyuubiConfigs?: string;
  /**
   * @example
   * 1.9.2-0.0.2
   */
  kyuubiReleaseVersion?: string;
  /**
   * @remarks
   * Kyuubi Service ID。
   * 
   * @example
   * kb-4e209b04588***95f04ad3538ae4
   */
  kyuubiServiceId?: string;
  /**
   * @example
   * dev_serverless_spark
   */
  name?: string;
  /**
   * @example
   * emr-spark-kyuubi-gateway-cn-beijing.aliyuncs.com
   */
  publicEndpoint?: string;
  /**
   * @example
   * true
   */
  publicEndpointEnabled?: boolean;
  /**
   * @example
   * dev_queue
   */
  queue?: string;
  /**
   * @example
   * esr-4.6.0 (Spark 3.5.2, Scala 2.12)
   */
  releaseVersion?: string;
  /**
   * @example
   * 0
   */
  replica?: number;
  /**
   * @example
   * []
   */
  sparkConfigs?: string;
  /**
   * @example
   * 1749456094000
   */
  startTime?: string;
  /**
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
  data?: GetKyuubiServiceResponseBodyData;
  /**
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

