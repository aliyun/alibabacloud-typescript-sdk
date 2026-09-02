// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKBSyncLinksResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The client identifier.
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
   * 2026-08-11T09:55:19Z
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
   * The source channel of the synchronization link.
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
   * pkbl-xxxxx
   */
  linkId?: string;
  /**
   * @remarks
   * The link name.
   * 
   * @example
   * testName
   */
  linkName?: string;
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
   * RUNNING
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

export class DescribeKBSyncLinksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of synchronization links.
   */
  items?: DescribeKBSyncLinksResponseBodyItems[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * EB07CFF0-D8A4-5C76-AED7-D00E26FC2***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeKBSyncLinksResponseBodyItems },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

