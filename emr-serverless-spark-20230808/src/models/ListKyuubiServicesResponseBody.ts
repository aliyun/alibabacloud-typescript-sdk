// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKyuubiServicesResponseBodyDataKyuubiServices extends $dara.Model {
  /**
   * @remarks
   * The KyuubiServer instance type.
   * 
   * @example
   * 4C16G
   */
  computeInstance?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-03-11T08:21:58Z
   */
  createTime?: string;
  /**
   * @remarks
   * The UID of the user who created the KyuubiServer.
   * 
   * @example
   * 103*******
   */
  creator?: string;
  /**
   * @remarks
   * The internal network endpoint.
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
   * The KyuubiServer version.
   * 
   * @example
   * 1.9.2-0.0.1
   */
  kyuubiReleaseVersion?: string;
  /**
   * @remarks
   * KyuubiServer ID。
   * 
   * @example
   * kb-070104e7631242448d12a1377c309f30
   */
  kyuubiServiceId?: string;
  /**
   * @remarks
   * The KyuubiServer name.
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
   * The queue name.
   * 
   * @example
   * dev_queue
   */
  queue?: string;
  /**
   * @remarks
   * The Spark DPI engine database engine version number.
   * 
   * @example
   * esr-4.2.0 (Spark 3.5.2, Scala 2.12)
   */
  releaseVersion?: string;
  /**
   * @remarks
   * The number of KyuubiServer replicas.
   * 
   * @example
   * 3
   */
  replica?: number;
  /**
   * @remarks
   * The default configurations for Spark applications started by KyuubiServer.
   * 
   * @example
   * spark.conf.key=value1
   * spark.conf.key1=value2
   */
  sparkConfigs?: string;
  /**
   * @remarks
   * The most recent start time of KyuubiServer.
   * 
   * @example
   * 2024-11-23 09:22:00
   */
  startTime?: string;
  /**
   * @remarks
   * The KyuubiServer status.
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
   * The list of KyuubiServer instances.
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
   * The response data.
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

