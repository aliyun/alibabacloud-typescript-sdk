// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDIProjectConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the destinations of the synchronization solutions. This parameter cannot be left empty. Valid values: analyticdb_for_mysql, odps, elasticsearch, holo, mysql, and polardb.
   * 
   * This parameter is required.
   * 
   * @example
   * elasticsearch
   */
  destinationType?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  projectId?: number;
  /**
   * @remarks
   * The type of the sources of the synchronization solutions. Valid values: oracle, mysql, polardb, datahub, drds, and analyticdb_for_mysql. If you do not configure this parameter, DataWorks applies the default global configuration to all sources.
   * 
   * @example
   * mysql
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      destinationType: 'DestinationType',
      projectId: 'ProjectId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationType: 'string',
      projectId: 'number',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

