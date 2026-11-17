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
   * The expected number of instances.
   * 
   * @example
   * 5
   */
  expectedReplica?: number;
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
   * The running queue for the Kyuubi service.
   * 
   * @example
   * dev_queue
   */
  queue?: string;
  /**
   * @remarks
   * Specifies whether to update the configurations.
   * 
   * @example
   * true
   */
  refresh?: boolean;
  /**
   * @remarks
   * The Spark DPI engine version number.
   * 
   * @example
   * esr-4.6.0 (Spark 3.5.2, Scala 2.12)
   */
  releaseVersion?: string;
  /**
   * @remarks
   * The number of replicas enabled for high availability.
   * 
   * @example
   * 0
   */
  replica?: number;
  /**
   * @remarks
   * Specifies whether to restart.
   * 
   * @example
   * false
   */
  restart?: boolean;
  /**
   * @remarks
   * Specifies whether to update the number of replicas.
   * 
   * @example
   * true
   */
  scale?: boolean;
  /**
   * @remarks
   * The Spark configurations.
   * 
   * @example
   * []
   */
  sparkConfigs?: string;
  static names(): { [key: string]: string } {
    return {
      computeInstance: 'computeInstance',
      expectedReplica: 'expectedReplica',
      kyuubiConfigs: 'kyuubiConfigs',
      kyuubiReleaseVersion: 'kyuubiReleaseVersion',
      name: 'name',
      publicEndpointEnabled: 'publicEndpointEnabled',
      queue: 'queue',
      refresh: 'refresh',
      releaseVersion: 'releaseVersion',
      replica: 'replica',
      restart: 'restart',
      scale: 'scale',
      sparkConfigs: 'sparkConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeInstance: 'string',
      expectedReplica: 'number',
      kyuubiConfigs: 'string',
      kyuubiReleaseVersion: 'string',
      name: 'string',
      publicEndpointEnabled: 'boolean',
      queue: 'string',
      refresh: 'boolean',
      releaseVersion: 'string',
      replica: 'number',
      restart: 'boolean',
      scale: 'boolean',
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

