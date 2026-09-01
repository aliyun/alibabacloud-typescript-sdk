// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterScannerListResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The most recent heartbeat time.
   * 
   * @example
   * 1693446913000
   */
  lastTime?: number;
  /**
   * @remarks
   * Indicates whether an upgrade is required.
   * 
   * @example
   * true
   */
  needUpdate?: boolean;
  /**
   * @remarks
   * The scanner status. Valid values:
   * - **online**: running
   * - **offline**: offline
   * - **not_installed**: not installed
   * 
   * @example
   * offline
   */
  status?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 20241111
   */
  version?: string;
  /**
   * @remarks
   * Indicates whether incremental scanning is enabled. Valid values:
   * - **0**: Disabled.
   * - **1**: Enabled.
   * 
   * @example
   * 1
   */
  webhookOpen?: number;
  /**
   * @remarks
   * The component status of incremental scanning. Valid values:
   * - **n**: not deployed
   * - **y**: deployed
   * 
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
   * @remarks
   * The number of clusters that have the scanner installed.
   * 
   * @example
   * 1
   */
  installedCount?: number;
  /**
   * @remarks
   * The list of clusters.
   */
  list?: DescribeClusterScannerListResponseBodyList[];
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each API request. You can use this ID to troubleshoot issues.
   * 
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

