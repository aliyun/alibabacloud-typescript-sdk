// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { JobDriver } from "./JobDriver";
import { Tag } from "./Tag";


export class StartJobRunRequestConfigurationOverridesConfigurations extends $dara.Model {
  /**
   * @remarks
   * The configuration file of SparkConf.
   * 
   * @example
   * spark-default.conf
   */
  configFileName?: string;
  /**
   * @remarks
   * The key of SparkConf.
   * 
   * @example
   * spark.app.name
   */
  configItemKey?: string;
  /**
   * @remarks
   * The value of SparkConf.
   * 
   * @example
   * test_app
   */
  configItemValue?: string;
  static names(): { [key: string]: string } {
    return {
      configFileName: 'configFileName',
      configItemKey: 'configItemKey',
      configItemValue: 'configItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configFileName: 'string',
      configItemKey: 'string',
      configItemValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobRunRequestConfigurationOverrides extends $dara.Model {
  /**
   * @remarks
   * The SparkConf objects.
   */
  configurations?: StartJobRunRequestConfigurationOverridesConfigurations[];
  static names(): { [key: string]: string } {
    return {
      configurations: 'configurations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurations: { 'type': 'array', 'itemType': StartJobRunRequestConfigurationOverridesConfigurations },
    };
  }

  validate() {
    if(Array.isArray(this.configurations)) {
      $dara.Model.validateArray(this.configurations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobRunRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * 8e6aae2810c8f67229ca70bb31cd6028
   */
  clientToken?: string;
  /**
   * @remarks
   * The code type of the job. Valid values:
   * 
   * *   SQL
   * *   JAR
   * *   PYTHON
   * 
   * @example
   * SQL
   */
  codeType?: string;
  /**
   * @remarks
   * The advanced configurations of Spark.
   */
  configurationOverrides?: StartJobRunRequestConfigurationOverrides;
  /**
   * @remarks
   * The version of the Spark engine.
   * 
   * @example
   * esr-3.3.1
   */
  displayReleaseVersion?: string;
  /**
   * @remarks
   * The timeout period of the job.
   * 
   * @example
   * 100
   */
  executionTimeoutSeconds?: number;
  /**
   * @remarks
   * Specifies whether to enable Fusion engine for acceleration.
   * 
   * @example
   * false
   */
  fusion?: boolean;
  /**
   * @remarks
   * The information about Spark Driver.
   */
  jobDriver?: JobDriver;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * jr-12345
   */
  jobId?: string;
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * spark_job_name
   */
  name?: string;
  /**
   * @remarks
   * The version number of Spark.
   * 
   * @example
   * esr-3.3.1
   */
  releaseVersion?: string;
  /**
   * @remarks
   * The name of the resource queue on which the Spark job runs.
   * 
   * @example
   * dev_queue
   */
  resourceQueueId?: string;
  /**
   * @remarks
   * The tags of the job.
   */
  tags?: Tag[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      codeType: 'codeType',
      configurationOverrides: 'configurationOverrides',
      displayReleaseVersion: 'displayReleaseVersion',
      executionTimeoutSeconds: 'executionTimeoutSeconds',
      fusion: 'fusion',
      jobDriver: 'jobDriver',
      jobId: 'jobId',
      name: 'name',
      releaseVersion: 'releaseVersion',
      resourceQueueId: 'resourceQueueId',
      tags: 'tags',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      codeType: 'string',
      configurationOverrides: StartJobRunRequestConfigurationOverrides,
      displayReleaseVersion: 'string',
      executionTimeoutSeconds: 'number',
      fusion: 'boolean',
      jobDriver: JobDriver,
      jobId: 'string',
      name: 'string',
      releaseVersion: 'string',
      resourceQueueId: 'string',
      tags: { 'type': 'array', 'itemType': Tag },
      regionId: 'string',
    };
  }

  validate() {
    if(this.configurationOverrides && typeof (this.configurationOverrides as any).validate === 'function') {
      (this.configurationOverrides as any).validate();
    }
    if(this.jobDriver && typeof (this.jobDriver as any).validate === 'function') {
      (this.jobDriver as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

