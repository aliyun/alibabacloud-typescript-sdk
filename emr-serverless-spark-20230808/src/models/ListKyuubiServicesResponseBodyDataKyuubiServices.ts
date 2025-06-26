// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKyuubiServicesResponseBodyDataKyuubiServices extends $dara.Model {
  /**
   * @example
   * 4C16G
   */
  computeInstance?: string;
  /**
   * @example
   * 2025-03-11T08:21:58Z
   */
  createTime?: string;
  /**
   * @example
   * 103*******
   */
  creator?: string;
  /**
   * @example
   * kyuubi-cn-hangzhou-internal.spark.emr.aliyuncs.com
   */
  innerEndpoint?: string;
  /**
   * @example
   * kyuubi.conf.key=value1
   * kyuubi.conf.key1=value2
   */
  kyuubiConfigs?: string;
  /**
   * @remarks
   * KyuubiServer ID。
   * 
   * @example
   * kb-070104e7631242448d12a1377c309f30
   */
  kyuubiServiceId?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * emr-spark-kyuubi-gateway-cn-hangzhou.aliyuncs.com
   */
  publicEndpoint?: string;
  /**
   * @example
   * dev_queue
   */
  queue?: string;
  /**
   * @example
   * esr-4.2.0 (Spark 3.5.2, Scala 2.12)
   */
  releaseVersion?: string;
  /**
   * @example
   * 3
   */
  replica?: number;
  /**
   * @example
   * spark.conf.key=value1
   * spark.conf.key1=value2
   */
  sparkConfigs?: string;
  /**
   * @example
   * 2024-11-23 09:22:00
   */
  startTime?: string;
  /**
   * @example
   * Running
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      computeInstance: 'computeInstance',
      createTime: 'createTime',
      creator: 'creator',
      innerEndpoint: 'innerEndpoint',
      kyuubiConfigs: 'kyuubiConfigs',
      kyuubiServiceId: 'kyuubiServiceId',
      name: 'name',
      publicEndpoint: 'publicEndpoint',
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
      kyuubiServiceId: 'string',
      name: 'string',
      publicEndpoint: 'string',
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

