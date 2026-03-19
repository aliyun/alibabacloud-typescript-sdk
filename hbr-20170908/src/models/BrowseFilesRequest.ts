// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BrowseFilesRequest extends $dara.Model {
  absolutePath?: string;
  /**
   * @example
   * c-000***o48
   */
  clientId?: string;
  /**
   * @example
   * STANDARD
   */
  edition?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * eyJ***Q==
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * ef6***46a
   */
  path?: string;
  /**
   * @example
   * r-000***oy9
   */
  restoreId?: string;
  securityToken?: string;
  /**
   * @example
   * 971***e9d
   */
  snapshotHash?: string;
  /**
   * @example
   * STANDARD
   */
  storageClass?: string;
  /**
   * @example
   * ***
   */
  token?: string;
  /**
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

