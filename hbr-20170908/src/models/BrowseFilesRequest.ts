// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BrowseFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The absolute path of the directory. Specify `/` to browse the root directory of the backup.
   * 
   * @example
   * /data/
   */
  absolutePath?: string;
  /**
   * @remarks
   * The backup client ID.
   * 
   * @example
   * c-000***o48
   */
  clientId?: string;
  /**
   * @remarks
   * The Cloud Backup edition. Valid values:
   * 
   * - **STANDARD**: Standard Edition. This is the default value.
   * 
   * - **BASIC**: Basic Edition. Only ECS file backup is supported in Basic Edition.
   * 
   * @example
   * STANDARD
   */
  edition?: string;
  /**
   * @remarks
   * The maximum number of results to return per request.
   * 
   * Valid values: 10 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is required to retrieve the next page of results. If this parameter is not specified, the first page of results is returned.
   * 
   * @example
   * eyJ***Q==
   */
  nextToken?: string;
  /**
   * @remarks
   * Deprecated. Use MaxResults and NextToken for pagination instead.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Deprecated. Use MaxResults and NextToken for pagination instead.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The hash value of the directory. If this parameter is not specified, the root directory of the backup is browsed.
   * 
   * @example
   * ef6***46a
   */
  path?: string;
  /**
   * @remarks
   * Deprecated.
   * 
   * @example
   * r-000***oy9
   */
  restoreId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The hash value of the backup snapshot.
   * 
   * @example
   * 971***e9d
   */
  snapshotHash?: string;
  /**
   * @remarks
   * The storage class of the backup data. Valid values:
   * 
   * - **STANDARD**: Standard.
   * 
   * - **ARCHIVE**: Archive.
   * 
   * @example
   * STANDARD
   */
  storageClass?: string;
  /**
   * @remarks
   * Deprecated. Do not use.
   * 
   * @example
   * ***
   */
  token?: string;
  /**
   * @remarks
   * The backup vault ID.
   * 
   * @example
   * v-000***jtz
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      absolutePath: 'AbsolutePath',
      clientId: 'ClientId',
      edition: 'Edition',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      path: 'Path',
      restoreId: 'RestoreId',
      securityToken: 'SecurityToken',
      snapshotHash: 'SnapshotHash',
      storageClass: 'StorageClass',
      token: 'Token',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      absolutePath: 'string',
      clientId: 'string',
      edition: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      path: 'string',
      restoreId: 'string',
      securityToken: 'string',
      snapshotHash: 'string',
      storageClass: 'string',
      token: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

