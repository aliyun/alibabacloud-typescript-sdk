// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKBSyncLinksResponseBodyItems extends $dara.Model {
  /**
   * @example
   * cli_xxxxxxbe8
   */
  clientId?: string;
  /**
   * @example
   * 2026-08-11T09:55:19Z
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
   * pkbl-xxxxx
   */
  linkId?: string;
  /**
   * @example
   * testName
   */
  linkName?: string;
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
  items?: DescribeKBSyncLinksResponseBodyItems[];
  /**
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

