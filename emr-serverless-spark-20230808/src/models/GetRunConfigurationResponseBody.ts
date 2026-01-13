// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Tag } from "./Tag";


export class GetRunConfigurationResponseBodyRunConfigurationApplicationConfigs extends $dara.Model {
  /**
   * @remarks
   * 应用配置文件名。 应用配置文件名。 ```spark-defaults.conf```
   * 
   * @example
   * spark-defaults.conf
   */
  configFileName?: string;
  /**
   * @remarks
   * 配置项键。 配置项键。 ```dfs.namenode.checkpoint.period```
   * 
   * @example
   * spark.driver.cores
   */
  configItemKey?: string;
  /**
   * @remarks
   * 配置项值。 配置项值。 ```3600s```
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
   * @example
   * INFO
   */
  logLevel?: string;
  /**
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
   * 应用配置项
   */
  applicationConfigs?: GetRunConfigurationResponseBodyRunConfigurationApplicationConfigs[];
  logConfig?: GetRunConfigurationResponseBodyRunConfigurationLogConfig;
  /**
   * @remarks
   * 运行配置。
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
   * 请求ID。
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
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

