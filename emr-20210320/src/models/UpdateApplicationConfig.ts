// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationConfig extends $dara.Model {
  /**
   * @remarks
   * 修改描述。
   * 
   * @example
   * dfs.namenode.checkpoint.period
   */
  configDescription?: string;
  /**
   * @remarks
   * 应用配置文件名。
   * 
   * @example
   * hdfs-site.xml
   */
  configFileName?: string;
  /**
   * @remarks
   * 配置项键。
   * 
   * @example
   * dfs.namenode.checkpoint.period
   */
  configItemKey?: string;
  /**
   * @remarks
   * 配置项值。
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

