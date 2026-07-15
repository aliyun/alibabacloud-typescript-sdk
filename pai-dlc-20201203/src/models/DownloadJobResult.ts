// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadJobResult extends $dara.Model {
  /**
   * @remarks
   * The display name of the download job.
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the download job.
   */
  downloadJobId?: string;
  /**
   * @remarks
   * A temporary, pre-signed URL for downloading the result file.
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The completion time of the download job, in UTC format.
   */
  endTime?: string;
  /**
   * @remarks
   * The type of file to download, such as `logs` or `output`.
   */
  fileType?: string;
  /**
   * @remarks
   * The creation time of the download job, in UTC format.
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The last modification time of the download job, in UTC format.
   */
  gmtModified?: string;
  /**
   * @remarks
   * The number of log entries included in the download.
   */
  logCount?: number;
  /**
   * @remarks
   * The IDs of the pods for the source job.
   */
  podIds?: string[];
  /**
   * @remarks
   * The UIDs of the pods for the source job.
   */
  podUids?: string[];
  /**
   * @remarks
   * The ID of the source job whose results are downloaded.
   */
  sourceJobId?: string;
  /**
   * @remarks
   * The start time of the download job, in UTC format.
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the download job. Valid values: `Running`, `Succeeded`, and `Failed`.
   */
  status?: string;
  /**
   * @remarks
   * The ID of the tenant that the job belongs to.
   */
  tenantId?: string;
  /**
   * @remarks
   * The type of the download job.
   */
  type?: string;
  /**
   * @remarks
   * The time when the download URL expires, in UTC format.
   */
  urlExpireTime?: string;
  /**
   * @remarks
   * The ID of the user who created the job.
   */
  userId?: string;
  /**
   * @remarks
   * The ID of the workspace where the job was created.
   */
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

