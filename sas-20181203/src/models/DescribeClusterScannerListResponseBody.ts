// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterScannerListResponseBodyList extends $dara.Model {
  /**
   * @example
   * 1693446913000
   */
  lastTime?: number;
  /**
   * @example
   * true
   */
  needUpdate?: boolean;
  /**
   * @example
   * offline
   */
  status?: string;
  /**
   * @example
   * 20241111
   */
  version?: string;
  /**
   * @example
   * 1
   */
  webhookOpen?: number;
  /**
   * @example
   * n
   */
  webhookStatus?: string;
  static names(): { [key: string]: string } {
    return {
      lastTime: 'LastTime',
      needUpdate: 'NeedUpdate',
      status: 'Status',
      version: 'Version',
      webhookOpen: 'WebhookOpen',
      webhookStatus: 'WebhookStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastTime: 'number',
      needUpdate: 'boolean',
      status: 'string',
      version: 'string',
      webhookOpen: 'number',
      webhookStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterScannerListResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  installedCount?: number;
  list?: DescribeClusterScannerListResponseBodyList[];
  /**
   * @example
   * 11C96623-E106-59C9-866D-A6C82911459F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      installedCount: 'InstalledCount',
      list: 'List',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      installedCount: 'number',
      list: { 'type': 'array', 'itemType': DescribeClusterScannerListResponseBodyList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

