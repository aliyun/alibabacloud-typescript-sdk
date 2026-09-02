// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKBSyncLinkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The client ID.
   * 
   * @example
   * cli_xxxxxxbe8
   */
  clientId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-08-14T05:58:42Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the synchronization link.
   * 
   * @example
   * testDesc
   */
  description?: string;
  /**
   * @remarks
   * The source channel of the synchronization link. Valid values:
   * - FEISHU 
   * - SHAREPOINT
   * 
   * @example
   * FEISHU
   */
  imPlatform?: string;
  /**
   * @remarks
   * The synchronization link ID.
   * 
   * @example
   * pkbl-xxxxxx
   */
  linkId?: string;
  /**
   * @remarks
   * The name of the synchronization link.
   * 
   * @example
   * testName
   */
  linkName?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 24A1990B-4F6E-482B-B8CB-75C612******
   */
  requestId?: string;
  /**
   * @remarks
   * The source directory address for synchronization.
   * 
   * @example
   * https://example.feishu.cn/wiki/space/xxxxxx
   */
  sourceDir?: string;
  /**
   * @remarks
   * The synchronization interval. Unit: minutes.
   * 
   * @example
   * 30
   */
  syncIntervalMinutes?: number;
  /**
   * @remarks
   * The synchronization status. Valid values:
   * - CREATING
   * - RUNNING
   * - PAUSED
   * - DELETING
   * 
   * @example
   * CREATING
   */
  syncStatus?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      creationTime: 'CreationTime',
      description: 'Description',
      imPlatform: 'ImPlatform',
      linkId: 'LinkId',
      linkName: 'LinkName',
      requestId: 'RequestId',
      sourceDir: 'SourceDir',
      syncIntervalMinutes: 'SyncIntervalMinutes',
      syncStatus: 'SyncStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      creationTime: 'string',
      description: 'string',
      imPlatform: 'string',
      linkId: 'string',
      linkName: 'string',
      requestId: 'string',
      sourceDir: 'string',
      syncIntervalMinutes: 'number',
      syncStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

