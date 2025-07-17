// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GrafanaWorkspaceIntegrationDataSource } from "./GrafanaWorkspaceIntegrationDataSource";


export class GrafanaWorkspaceIntegrationDetail extends $dara.Model {
  dataSources?: GrafanaWorkspaceIntegrationDataSource[];
  integrationId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      dataSources: 'dataSources',
      integrationId: 'integrationId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSources: { 'type': 'array', 'itemType': GrafanaWorkspaceIntegrationDataSource },
      integrationId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataSources)) {
      $dara.Model.validateArray(this.dataSources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

