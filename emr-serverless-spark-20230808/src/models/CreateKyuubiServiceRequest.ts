// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKyuubiServiceRequest extends $dara.Model {
  /**
   * @example
   * 2c8g
   */
  computeInstance?: string;
  /**
   * @example
   * [{\\"key\\":\\"kyuubi.engine.share.level\\",\\"value\\":\\"USER\\"}]
   */
  kyuubiConfigs?: string;
  /**
   * @example
   * 1.9.2-0.0.2
   */
  kyuubiReleaseVersion?: string;
  /**
   * @example
   * dev_serverless_spark
   */
  name?: string;
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
   * 3
   */
  replica?: number;
  /**
   * @example
   * [{\\"key\\":\\"spark.app.name\\",\\"value\\":\\"test\\"}]
   */
  sparkConfigs?: string;
  static names(): { [key: string]: string } {
    return {
      computeInstance: 'computeInstance',
      kyuubiConfigs: 'kyuubiConfigs',
      kyuubiReleaseVersion: 'kyuubiReleaseVersion',
      name: 'name',
      publicEndpointEnabled: 'publicEndpointEnabled',
      queue: 'queue',
      releaseVersion: 'releaseVersion',
      replica: 'replica',
      sparkConfigs: 'sparkConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeInstance: 'string',
      kyuubiConfigs: 'string',
      kyuubiReleaseVersion: 'string',
      name: 'string',
      publicEndpointEnabled: 'boolean',
      queue: 'string',
      releaseVersion: 'string',
      replica: 'number',
      sparkConfigs: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

