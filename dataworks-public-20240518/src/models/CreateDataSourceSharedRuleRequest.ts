// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataSourceSharedRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The data source ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 144544
   */
  dataSourceId?: number;
  /**
   * @remarks
   * Share data sources to the target project environment, including
   * - Dev (Development Environment)
   * - Prod (production environment)
   * 
   * This parameter is required.
   * 
   * @example
   * Dev
   */
  envType?: string;
  /**
   * @remarks
   * The user with which you want to share the data source. If you do not configure this parameter, the data source is shared to an entire workspace.
   * 
   * @example
   * 1107550004253538
   */
  sharedUser?: string;
  /**
   * @remarks
   * The ID of the workspace to which you want to share the data source. You cannot share the data source to the workspace with which the data source is associated.
   * 
   * This parameter is required.
   * 
   * @example
   * 106560
   */
  targetProjectId?: number;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      envType: 'EnvType',
      sharedUser: 'SharedUser',
      targetProjectId: 'TargetProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'number',
      envType: 'string',
      sharedUser: 'string',
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

