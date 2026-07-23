// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AgenticDmsInstanceSyncTaskInstanceDmsInstanceSummary extends $dara.Model {
  alias?: string;
  dbType?: string;
  envType?: string;
  host?: string;
  instanceResourceId?: string;
  instanceSource?: string;
  port?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      dbType: 'DbType',
      envType: 'EnvType',
      host: 'Host',
      instanceResourceId: 'InstanceResourceId',
      instanceSource: 'InstanceSource',
      port: 'Port',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      dbType: 'string',
      envType: 'string',
      host: 'string',
      instanceResourceId: 'string',
      instanceSource: 'string',
      port: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgenticDmsInstanceSyncTaskInstance extends $dara.Model {
  catalogUuid?: string;
  crawlerTaskId?: string;
  datasourceUuid?: string;
  dbType?: string;
  dmsInstanceId?: string;
  dmsInstanceSummary?: AgenticDmsInstanceSyncTaskInstanceDmsInstanceSummary;
  dmsRegionId?: string;
  errorCode?: string;
  errorSummary?: string;
  gmtCreate?: string;
  gmtModified?: string;
  phase?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      catalogUuid: 'CatalogUuid',
      crawlerTaskId: 'CrawlerTaskId',
      datasourceUuid: 'DatasourceUuid',
      dbType: 'DbType',
      dmsInstanceId: 'DmsInstanceId',
      dmsInstanceSummary: 'DmsInstanceSummary',
      dmsRegionId: 'DmsRegionId',
      errorCode: 'ErrorCode',
      errorSummary: 'ErrorSummary',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      phase: 'Phase',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogUuid: 'string',
      crawlerTaskId: 'string',
      datasourceUuid: 'string',
      dbType: 'string',
      dmsInstanceId: 'string',
      dmsInstanceSummary: AgenticDmsInstanceSyncTaskInstanceDmsInstanceSummary,
      dmsRegionId: 'string',
      errorCode: 'string',
      errorSummary: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      phase: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.dmsInstanceSummary && typeof (this.dmsInstanceSummary as any).validate === 'function') {
      (this.dmsInstanceSummary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

