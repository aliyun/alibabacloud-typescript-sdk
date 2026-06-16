// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Tag } from "./Tag";


export class GetRunConfigurationResponseBodyRunConfigurationApplicationConfigs extends $dara.Model {
  /**
   * @remarks
   * The name of the application configuration file.
   * 
   * @example
   * spark-defaults.conf
   */
  configFileName?: string;
  /**
   * @remarks
   * The key of the configuration item.
   * 
   * @example
   * spark.driver.cores
   */
  configItemKey?: string;
  /**
   * @remarks
   * The value of the configuration item.
   * 
   * @example
   * 2
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

export class GetRunConfigurationResponseBodyRunConfigurationLogConfig extends $dara.Model {
  /**
   * @remarks
   * The log level.
   * 
   * @example
   * INFO
   */
  logLevel?: string;
  /**
   * @remarks
   * The log path.
   * 
   * @example
   * oss://test
   */
  logPath?: string;
  static names(): { [key: string]: string } {
    return {
      logLevel: 'LogLevel',
      logPath: 'LogPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logLevel: 'string',
      logPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunConfigurationResponseBodyRunConfiguration extends $dara.Model {
  /**
   * @remarks
   * The list of Spark configuration parameters.
   */
  applicationConfigs?: GetRunConfigurationResponseBodyRunConfigurationApplicationConfigs[];
  /**
   * @remarks
   * The log configuration.
   */
  logConfig?: GetRunConfigurationResponseBodyRunConfigurationLogConfig;
  /**
   * @remarks
   * The list of runtime parameters.
   */
  runtimeConfigs?: Tag[];
  static names(): { [key: string]: string } {
    return {
      applicationConfigs: 'applicationConfigs',
      logConfig: 'logConfig',
      runtimeConfigs: 'runtimeConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationConfigs: { 'type': 'array', 'itemType': GetRunConfigurationResponseBodyRunConfigurationApplicationConfigs },
      logConfig: GetRunConfigurationResponseBodyRunConfigurationLogConfig,
      runtimeConfigs: { 'type': 'array', 'itemType': Tag },
    };
  }

  validate() {
    if(Array.isArray(this.applicationConfigs)) {
      $dara.Model.validateArray(this.applicationConfigs);
    }
    if(this.logConfig && typeof (this.logConfig as any).validate === 'function') {
      (this.logConfig as any).validate();
    }
    if(Array.isArray(this.runtimeConfigs)) {
      $dara.Model.validateArray(this.runtimeConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * The run configuration.
   */
  runConfiguration?: GetRunConfigurationResponseBodyRunConfiguration;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      runConfiguration: 'runConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      runConfiguration: GetRunConfigurationResponseBodyRunConfiguration,
    };
  }

  validate() {
    if(this.runConfiguration && typeof (this.runConfiguration as any).validate === 'function') {
      (this.runConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

