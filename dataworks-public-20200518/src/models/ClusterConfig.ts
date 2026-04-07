// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClusterConfig extends $dara.Model {
  /**
   * @remarks
   * The configuration value.
   * 
   * @example
   * {"spark.driver.memory":"1g"}
   */
  configValue?: string;
  /**
   * @remarks
   * Specifies whether to overwrite the advanced settings of nodes in DataStudio. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  enableOverwrite?: boolean;
  /**
   * @remarks
   * The module in which the cluster is configured. Valid values:
   * 
   * *   ide: DataStudio.
   * *   da: DataAnalysis.
   * *   scheduler.auto: Operation Center - auto triggered instances.
   * *   scheduler.backfill: Operation Center - data backfill instances.
   * *   scheduler.test: Operation Center - test instances.
   * *   scheduler.manual: Operation Center - manually triggered instances.
   * 
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

