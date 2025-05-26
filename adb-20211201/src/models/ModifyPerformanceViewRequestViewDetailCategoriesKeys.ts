// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPerformanceViewRequestViewDetailCategoriesKeys extends $dara.Model {
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * AnalyticDB_CPU
   */
  keyName?: string;
  /**
   * @remarks
   * Specifies whether to select the metric. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  selected?: boolean;
  static names(): { [key: string]: string } {
    return {
      keyName: 'KeyName',
      selected: 'Selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyName: 'string',
      selected: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

