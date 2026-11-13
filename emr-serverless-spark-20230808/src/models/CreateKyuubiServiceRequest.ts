// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKyuubiServiceRequest extends $dara.Model {
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
   * The Kyuubi service configurations.
   * 
   * @example
   * [{\\"key\\":\\"kyuubi.engine.share.level\\",\\"value\\":\\"USER\\"}]
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
   * The name of the Kyuubi service.
   * 
   * @example
   * dev_serverless_spark
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to enable public network access.
   * 
   * @example
   * true
   */
  publicEndpointEnabled?: boolean;
  /**
   * @remarks
   * The execution queue of the Kyuubi service.
   * 
   * @example
   * dev_queue
   */
  queue?: string;
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
   * The number of replicas for high availability.
   * 
   * @example
   * 3
   */
  replica?: number;
  /**
   * @remarks
   * The Spark configurations.
   * 
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

