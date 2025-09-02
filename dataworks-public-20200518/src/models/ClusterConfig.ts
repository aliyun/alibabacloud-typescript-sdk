// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClusterConfig extends $dara.Model {
  /**
   * @example
   * {"spark.driver.memory":"1g"}
   */
  configValue?: string;
  /**
   * @example
   * false
   */
  enableOverwrite?: boolean;
  /**
   * @example
   * ide
   */
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      configValue: 'ConfigValue',
      enableOverwrite: 'EnableOverwrite',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValue: 'string',
      enableOverwrite: 'boolean',
      moduleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

