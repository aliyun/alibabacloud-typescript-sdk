// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSnapshotUrlsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * The list of snapshot URLs.
   */
  snapshotUrls?: string[];
  /**
   * @remarks
   * The total number of snapshots.
   * 
   * @example
   * 30
   */
  total?: number;
  /**
   * @remarks
   * The URL of the WebVTT file.
   * 
   * @example
   * http://test-bucket.oss-cn-shanghai.aliyuncs.com/ouoput.vtt
   */
  webVTTUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      snapshotUrls: 'SnapshotUrls',
      total: 'Total',
      webVTTUrl: 'WebVTTUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      snapshotUrls: { 'type': 'array', 'itemType': 'string' },
      total: 'number',
      webVTTUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.snapshotUrls)) {
      $dara.Model.validateArray(this.snapshotUrls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

