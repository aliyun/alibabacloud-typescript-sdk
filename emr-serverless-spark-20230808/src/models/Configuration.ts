// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Configuration extends $dara.Model {
  /**
   * @remarks
   * The name of the configuration file.
   * 
   * @example
   * common.conf
   */
  configFileName?: string;
  /**
   * @remarks
   * The name of the configuration item.
   * 
   * @example
   * hive.metastore.type
   */
  configItemKey?: string;
  /**
   * @remarks
   * The value of the configuration item.
   * 
   * @example
   * USER_RDS
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

