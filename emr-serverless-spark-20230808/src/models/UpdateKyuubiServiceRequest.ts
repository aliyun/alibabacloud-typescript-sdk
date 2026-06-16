// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKyuubiServiceRequest extends $dara.Model {
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
   * The Kyuubi service configuration.
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
   * The name.
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
   * The queue in which the Kyuubi service runs.
   * 
   * @example
   * dev_queue
   */
  queue?: string;
  /**
   * @remarks
   * The version of the Spark engine.
   * 
   * @example
   * esr-4.6.0 (Spark 3.5.2, Scala 2.12)
   */
  releaseVersion?: string;
  /**
   * @remarks
   * The number of replicas for high availability (HA).
   * 
   * @example
   * 0
   */
  replica?: number;
  /**
   * @remarks
   * Specifies whether to restart the service.
   * 
   * @example
   * false
   */
  restart?: boolean;
  /**
   * @remarks
   * The Spark configuration.
   * 
   * @example
   * []
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
      restart: 'restart',
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
      restart: 'boolean',
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

