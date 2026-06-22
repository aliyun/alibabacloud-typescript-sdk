// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationConfig extends $dara.Model {
  /**
   * @remarks
   * A description of the modification.
   * 
   * @example
   * dfs.namenode.checkpoint.period
   */
  configDescription?: string;
  /**
   * @remarks
   * The name of the application configuration file.
   * 
   * @example
   * hdfs-site.xml
   */
  configFileName?: string;
  /**
   * @remarks
   * The configuration item key.
   * 
   * @example
   * dfs.namenode.checkpoint.period
   */
  configItemKey?: string;
  /**
   * @remarks
   * The configuration item value.
   * 
   * @example
   * 3600s
   */
  configItemValue?: string;
  static names(): { [key: string]: string } {
    return {
      configDescription: 'ConfigDescription',
      configFileName: 'ConfigFileName',
      configItemKey: 'ConfigItemKey',
      configItemValue: 'ConfigItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configDescription: 'string',
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

