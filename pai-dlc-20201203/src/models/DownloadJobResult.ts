// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadJobResult extends $dara.Model {
  displayName?: string;
  downloadJobId?: string;
  downloadUrl?: string;
  endTime?: string;
  fileType?: string;
  gmtCreated?: string;
  gmtModified?: string;
  logCount?: number;
  podIds?: string[];
  podUids?: string[];
  sourceJobId?: string;
  startTime?: string;
  status?: string;
  tenantId?: string;
  type?: string;
  urlExpireTime?: string;
  userId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      downloadJobId: 'DownloadJobId',
      downloadUrl: 'DownloadUrl',
      endTime: 'EndTime',
      fileType: 'FileType',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      logCount: 'LogCount',
      podIds: 'PodIds',
      podUids: 'PodUids',
      sourceJobId: 'SourceJobId',
      startTime: 'StartTime',
      status: 'Status',
      tenantId: 'TenantId',
      type: 'Type',
      urlExpireTime: 'UrlExpireTime',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      downloadJobId: 'string',
      downloadUrl: 'string',
      endTime: 'string',
      fileType: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      logCount: 'number',
      podIds: { 'type': 'array', 'itemType': 'string' },
      podUids: { 'type': 'array', 'itemType': 'string' },
      sourceJobId: 'string',
      startTime: 'string',
      status: 'string',
      tenantId: 'string',
      type: 'string',
      urlExpireTime: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.podIds)) {
      $dara.Model.validateArray(this.podIds);
    }
    if(Array.isArray(this.podUids)) {
      $dara.Model.validateArray(this.podUids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

