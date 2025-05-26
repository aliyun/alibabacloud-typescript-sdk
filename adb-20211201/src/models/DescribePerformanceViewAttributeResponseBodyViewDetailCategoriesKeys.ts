// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePerformanceViewAttributeResponseBodyViewDetailCategoriesKeys extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the multi-cluster feature is enabled. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * true
   */
  enableAutoMc?: boolean;
  /**
   * @remarks
   * The database engine of the cluster. Valid values:
   * 
   * *  AnalyticDB
   */
  engine?: string[];
  /**
   * @remarks
   * The type of the resource group. Valid values:
   * 
   * *   **Interactive**
   * *   **Job**
   * 
   * >  For more information about resource groups, see [Resource group overview](https://help.aliyun.com/document_detail/428610.html).
   */
  groupType?: string[];
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
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  selected?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableAutoMc: 'EnableAutoMc',
      engine: 'Engine',
      groupType: 'GroupType',
      keyName: 'KeyName',
      selected: 'Selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableAutoMc: 'boolean',
      engine: { 'type': 'array', 'itemType': 'string' },
      groupType: { 'type': 'array', 'itemType': 'string' },
      keyName: 'string',
      selected: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.engine)) {
      $dara.Model.validateArray(this.engine);
    }
    if(Array.isArray(this.groupType)) {
      $dara.Model.validateArray(this.groupType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

