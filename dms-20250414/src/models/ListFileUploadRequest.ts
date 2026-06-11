// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFileUploadRequest extends $dara.Model {
  /**
   * @remarks
   * For front-end use only.
   * 
   * @example
   * 仅前端使用
   */
  callFrom?: string;
  /**
   * @remarks
   * The current DMS unit.
   * 
   * @example
   * cn-hangzhou
   */
  dmsUnit?: string;
  /**
   * @remarks
   * The validity period of the download link, in seconds. This parameter applies only to files in user-owned Object Storage Service (OSS) buckets. The default is 3600.
   * 
   * - Minimum value: 3600 (1 hour)
   * 
   * - Maximum value: 129600 (36 hours)
   * 
   * Notes:
   * 
   * - Download links for files in the built-in OSS are valid for 1 hour.
   * 
   * -
   * 
   * @example
   * 3600
   */
  downloadLinkExpire?: number;
  /**
   * @remarks
   * The file category.
   * 
   * @example
   * TextReport
   */
  fileCategory?: string;
  /**
   * @remarks
   * The file source.
   * 
   * @example
   * Agent
   */
  fileFrom?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * f-8*******01m
   */
  fileId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * h8r********4fch
   */
  sessionId?: string;
  /**
   * @remarks
   * The sort column.
   * 
   * @example
   * gmtCreated
   */
  sortColumn?: string;
  /**
   * @remarks
   * The sort direction.
   * 
   * @example
   * asc
   */
  sortDirection?: string;
  static names(): { [key: string]: string } {
    return {
      callFrom: 'CallFrom',
      dmsUnit: 'DmsUnit',
      downloadLinkExpire: 'DownloadLinkExpire',
      fileCategory: 'FileCategory',
      fileFrom: 'FileFrom',
      fileId: 'FileId',
      sessionId: 'SessionId',
      sortColumn: 'SortColumn',
      sortDirection: 'SortDirection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callFrom: 'string',
      dmsUnit: 'string',
      downloadLinkExpire: 'number',
      fileCategory: 'string',
      fileFrom: 'string',
      fileId: 'string',
      sessionId: 'string',
      sortColumn: 'string',
      sortDirection: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

