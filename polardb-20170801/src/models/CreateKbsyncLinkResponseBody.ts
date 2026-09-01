// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKBSyncLinkResponseBody extends $dara.Model {
  /**
   * @example
   * cli_xxxxxxbe8
   */
  clientId?: string;
  /**
   * @example
   * 2026-08-14T05:58:42Z
   */
  creationTime?: string;
  /**
   * @example
   * testDesc
   */
  description?: string;
  /**
   * @example
   * FEISHU
   */
  imPlatform?: string;
  /**
   * @example
   * pkbl-xxxxxx
   */
  linkId?: string;
  /**
   * @example
   * testName
   */
  linkName?: string;
  /**
   * @example
   * 24A1990B-4F6E-482B-B8CB-75C612******
   */
  requestId?: string;
  /**
   * @example
   * https://example.feishu.cn/wiki/space/xxxxxx
   */
  sourceDir?: string;
  /**
   * @example
   * 30
   */
  syncIntervalMinutes?: number;
  /**
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

