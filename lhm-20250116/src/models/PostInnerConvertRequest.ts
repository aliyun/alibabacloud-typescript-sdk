// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PostInnerConvertRequest extends $dara.Model {
  /**
   * @remarks
   * SQL node type mapping, where the key is the source node type and the value is the target node type. If not empty, it will be assembled into `workflow.converter.sqlNodeTypeMapping` in `innerConvertConfig` and written via the task configuration update interface after creating the scheduling transformation task.
   */
  sqlConvertMap?: { [key: string]: any };
  /**
   * @remarks
   * Source data source name, i.e., the name of the scheduling data source at the source end of the transformation task.
   * 
   * @example
   * SourceDS1
   */
  srcDataSourceName?: string;
  /**
   * @remarks
   * Target data source name, i.e., the name of the scheduling data source at the target end of the transformation task.
   * 
   * @example
   * TargetDS1
   */
  tgtDataSourceName?: string;
  static names(): { [key: string]: string } {
    return {
      sqlConvertMap: 'sqlConvertMap',
      srcDataSourceName: 'srcDataSourceName',
      tgtDataSourceName: 'tgtDataSourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sqlConvertMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      srcDataSourceName: 'string',
      tgtDataSourceName: 'string',
    };
  }

  validate() {
    if(this.sqlConvertMap) {
      $dara.Model.validateMap(this.sqlConvertMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

