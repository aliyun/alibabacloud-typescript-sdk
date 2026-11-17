// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKyuubiServicesResponseBodyDataKyuubiServices extends $dara.Model {
  /**
   * @remarks
   * The instance type of the KyuubiServer.
   * 
   * @example
   * 4C16G
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
   * The creation time. The time is in UTC and follows the ISO 8601 format.
   * 
   * @example
   * 2025-03-11T08:21:58Z
   */
  createTime?: string;
  /**
   * @remarks
   * The UID of the creator.
   * 
   * @example
   * 103*******
   */
  creator?: string;
  /**
   * @remarks
   * The internal domain name.
   * 
   * @example
   * kyuubi-cn-hangzhou-internal.spark.emr.aliyuncs.com
   */
  innerEndpoint?: string;
  /**
   * @remarks
   * The KyuubiServer configurations.
   * 
   * @example
   * kyuubi.conf.key=value1
   * kyuubi.conf.key1=value2
   */
  kyuubiConfigs?: string;
  /**
   * @remarks
   * The version of the KyuubiServer.
   * 
   * @example
   * 1.9.2-0.0.1
   */
  kyuubiReleaseVersion?: string;
  /**
   * @remarks
   * The KyuubiServer ID.
   * 
   * @example
   * kb-070104e7631242448d12a1377c309f30
   */
  kyuubiServiceId?: string;
  /**
   * @remarks
   * The name of the KyuubiServer.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The public domain name.
   * 
   * @example
   * emr-spark-kyuubi-gateway-cn-hangzhou.aliyuncs.com
   */
  publicEndpoint?: string;
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
   * The database engine version number of the Spark DPI engine.
   * 
   * @example
   * esr-4.2.0 (Spark 3.5.2, Scala 2.12)
   */
  releaseVersion?: string;
  /**
   * @remarks
   * The number of replicas for the KyuubiServer.
   * 
   * @example
   * 3
   */
  replica?: number;
  /**
   * @remarks
   * The default configurations for KyuubiServer to start Spark applications.
   * 
   * @example
   * spark.conf.key=value1
   * spark.conf.key1=value2
   */
  sparkConfigs?: string;
  /**
   * @remarks
   * The most recent start time of the KyuubiServer. The time is formatted as YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2024-11-23 09:22:00
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the KyuubiServer.
   * 
   * @example
   * Running
   */
  state?: string;
  /**
   * @remarks
   * The WebUI of the Kyuubi Gateway.
   * 
   * @example
   * http://pre-1-emr-spark-kyuubi-gateway-cn-hangzhou.data.aliyun.com/ui/?token=NkVTWG1LSWRYSExiZ1VrTTQreVZ0aFhmYW1BWEJHTW8vN3VEY0MrZzVrQUdXWWY1Rm41Zi9mUkNMRzhPL3o1dDJNbXkrd3cvUmRqck9OMmFlQ21JL002bFhQK1lSa29hZ2tvT0hhNVk3WU9tWHhINFAxL3BscURkUUpFd2E2QTdCUWpDSkVvcERUUlhhaGhlOXdxdWFYaEpwSU9STXVRaGJ6ZUg0d0dDeWhIVVRsRW9ucStZbkt0U3BrbmdsNys1N3ZNRU1qaTZ2aktvN1M1K1d0YU5TemkwRmwvNkdCOHR2LzVWZWNLNkJPND
   */
  webUi?: string;
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
      queue: 'queue',
      releaseVersion: 'releaseVersion',
      replica: 'replica',
      sparkConfigs: 'sparkConfigs',
      startTime: 'startTime',
      state: 'state',
      webUi: 'webUi',
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
      queue: 'string',
      releaseVersion: 'string',
      replica: 'number',
      sparkConfigs: 'string',
      startTime: 'string',
      state: 'string',
      webUi: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKyuubiServicesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of KyuubiServers.
   */
  kyuubiServices?: ListKyuubiServicesResponseBodyDataKyuubiServices[];
  static names(): { [key: string]: string } {
    return {
      kyuubiServices: 'kyuubiServices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kyuubiServices: { 'type': 'array', 'itemType': ListKyuubiServicesResponseBodyDataKyuubiServices },
    };
  }

  validate() {
    if(Array.isArray(this.kyuubiServices)) {
      $dara.Model.validateArray(this.kyuubiServices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKyuubiServicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListKyuubiServicesResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
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
      data: ListKyuubiServicesResponseBodyData,
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

