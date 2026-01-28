// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrafanaWorkspaceIntegrationDataSource extends $dara.Model {
  clusterType?: string;
  datasourceId?: string;
  datasourceName?: string;
  datasourceUrl?: string;
  description?: string;
  exploreUrl?: string;
  folderUrl?: string;
  regionId?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'clusterType',
      datasourceId: 'datasourceId',
      datasourceName: 'datasourceName',
      datasourceUrl: 'datasourceUrl',
      description: 'description',
      exploreUrl: 'exploreUrl',
      folderUrl: 'folderUrl',
      regionId: 'regionId',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      datasourceId: 'string',
      datasourceName: 'string',
      datasourceUrl: 'string',
      description: 'string',
      exploreUrl: 'string',
      folderUrl: 'string',
      regionId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

