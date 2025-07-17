// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GrafanaWorkspaceIntegrationPreview } from "./GrafanaWorkspaceIntegrationPreview";


export class GrafanaWorkspaceIntegration extends $dara.Model {
  datasourceAmount?: number;
  integrationId?: string;
  integrationName?: string;
  previews?: GrafanaWorkspaceIntegrationPreview[];
  status?: string;
  supportRegions?: string[];
  static names(): { [key: string]: string } {
    return {
      datasourceAmount: 'datasourceAmount',
      integrationId: 'integrationId',
      integrationName: 'integrationName',
      previews: 'previews',
      status: 'status',
      supportRegions: 'supportRegions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasourceAmount: 'number',
      integrationId: 'string',
      integrationName: 'string',
      previews: { 'type': 'array', 'itemType': GrafanaWorkspaceIntegrationPreview },
      status: 'string',
      supportRegions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.previews)) {
      $dara.Model.validateArray(this.previews);
    }
    if(Array.isArray(this.supportRegions)) {
      $dara.Model.validateArray(this.supportRegions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

