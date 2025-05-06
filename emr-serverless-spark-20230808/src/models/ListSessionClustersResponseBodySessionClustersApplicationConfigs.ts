// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSessionClustersResponseBodySessionClustersApplicationConfigs extends $dara.Model {
  /**
   * @remarks
   * The name of the configuration file.
   * 
   * @example
   * spark-default.conf
   */
  configFileName?: string;
  /**
   * @remarks
   * The key of the configuration.
   * 
   * @example
   * spark.app.name
   */
  configItemKey?: string;
  /**
   * @remarks
   * The configuration value.
   * 
   * @example
   * test_application
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

