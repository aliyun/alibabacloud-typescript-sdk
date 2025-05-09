// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourceSharedRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The data source ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  dataSourceId?: number;
  /**
   * @remarks
   * The ID of the workspace to which the data source is shared. You cannot share the data source to the workspace with which the data source is associated.
   * 
   * @example
   * 1
   */
  targetProjectId?: number;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      targetProjectId: 'TargetProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'number',
      targetProjectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

