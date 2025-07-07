// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateLivyComputeRequestAutoStartConfiguration } from "./UpdateLivyComputeRequestAutoStartConfiguration";
import { UpdateLivyComputeRequestAutoStopConfiguration } from "./UpdateLivyComputeRequestAutoStopConfiguration";


export class UpdateLivyComputeRequest extends $dara.Model {
  /**
   * @example
   * Token
   */
  authType?: string;
  autoStartConfiguration?: UpdateLivyComputeRequestAutoStartConfiguration;
  autoStopConfiguration?: UpdateLivyComputeRequestAutoStopConfiguration;
  /**
   * @example
   * 1
   */
  cpuLimit?: string;
  /**
   * @example
   * esr-4.3.0 (Spark 3.5.2, Scala 2.12)
   */
  displayReleaseVersion?: string;
  enablePublic?: boolean;
  /**
   * @example
   * ev-cq146allhtgkulp5smk0
   */
  environmentId?: string;
  /**
   * @example
   * false
   */
  fusion?: boolean;
  /**
   * @example
   * {
   *   "sparkDefaultsConf": "spark.driver.cores     1\\nspark.driver.memory    4g\\nspark.executor.cores   1\\nspark.executor.memory  4g\\n",
   *   "sparkBlackListConf": "spark.driver.cores\\nspark.driver.memory",
   *   "livyConf": "livy.server.session.timeout  1h\\n",
   *   "livyClientConf": "livy.rsc.sql.num-rows  1000\\n"
   * }
   */
  livyServerConf?: string;
  /**
   * @example
   * 0.8.0
   */
  livyVersion?: string;
  /**
   * @example
   * 4Gi
   */
  memoryLimit?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * test
   */
  networkName?: string;
  /**
   * @example
   * root_queue
   */
  queueName?: string;
  /**
   * @example
   * esr-4.3.0 (Spark 3.5.2, Scala 2.12, Java Runtime)
   */
  releaseVersion?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'authType',
      autoStartConfiguration: 'autoStartConfiguration',
      autoStopConfiguration: 'autoStopConfiguration',
      cpuLimit: 'cpuLimit',
      displayReleaseVersion: 'displayReleaseVersion',
      enablePublic: 'enablePublic',
      environmentId: 'environmentId',
      fusion: 'fusion',
      livyServerConf: 'livyServerConf',
      livyVersion: 'livyVersion',
      memoryLimit: 'memoryLimit',
      name: 'name',
      networkName: 'networkName',
      queueName: 'queueName',
      releaseVersion: 'releaseVersion',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      autoStartConfiguration: UpdateLivyComputeRequestAutoStartConfiguration,
      autoStopConfiguration: UpdateLivyComputeRequestAutoStopConfiguration,
      cpuLimit: 'string',
      displayReleaseVersion: 'string',
      enablePublic: 'boolean',
      environmentId: 'string',
      fusion: 'boolean',
      livyServerConf: 'string',
      livyVersion: 'string',
      memoryLimit: 'string',
      name: 'string',
      networkName: 'string',
      queueName: 'string',
      releaseVersion: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(this.autoStartConfiguration && typeof (this.autoStartConfiguration as any).validate === 'function') {
      (this.autoStartConfiguration as any).validate();
    }
    if(this.autoStopConfiguration && typeof (this.autoStopConfiguration as any).validate === 'function') {
      (this.autoStopConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

