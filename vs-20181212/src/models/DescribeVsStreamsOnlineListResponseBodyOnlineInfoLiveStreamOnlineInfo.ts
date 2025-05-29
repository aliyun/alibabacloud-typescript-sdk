// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsStreamsOnlineListResponseBodyOnlineInfoLiveStreamOnlineInfo extends $dara.Model {
  /**
   * @example
   * xxxApp
   */
  appName?: string;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * push.example.com
   */
  publishDomain?: string;
  /**
   * @example
   * 2015-12-02T06:58:04Z
   */
  publishTime?: string;
  /**
   * @example
   * edge
   */
  publishType?: string;
  /**
   * @example
   * rtmp://example.com/xchen
   */
  publishUrl?: string;
  /**
   * @example
   * testxchen_small
   */
  streamName?: string;
  /**
   * @example
   * 123
   */
  transcodeId?: string;
  /**
   * @example
   * no
   */
  transcoded?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      publishDomain: 'PublishDomain',
      publishTime: 'PublishTime',
      publishType: 'PublishType',
      publishUrl: 'PublishUrl',
      streamName: 'StreamName',
      transcodeId: 'TranscodeId',
      transcoded: 'Transcoded',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      publishDomain: 'string',
      publishTime: 'string',
      publishType: 'string',
      publishUrl: 'string',
      streamName: 'string',
      transcodeId: 'string',
      transcoded: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

