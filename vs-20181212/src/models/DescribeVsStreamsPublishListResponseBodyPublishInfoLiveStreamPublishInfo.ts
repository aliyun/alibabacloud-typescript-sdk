// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsStreamsPublishListResponseBodyPublishInfoLiveStreamPublishInfo extends $dara.Model {
  /**
   * @example
   * xxxApp
   */
  appName?: string;
  /**
   * @example
   * 192.168.0.1
   */
  clientAddr?: string;
  /**
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * 192.168.0.1
   */
  edgeNodeAddr?: string;
  /**
   * @example
   * example.aliyundoc.com
   */
  publishDomain?: string;
  /**
   * @example
   * 2016-06-29T19:00:00Z
   */
  publishTime?: string;
  /**
   * @example
   * center
   */
  publishType?: string;
  /**
   * @example
   * https://example.aliyundoc.com/xxxApp/3402000****320000001.m3u8
   */
  publishUrl?: string;
  /**
   * @example
   * 2016-06-29T19:00:00Z
   */
  stopTime?: string;
  /**
   * @example
   * xxxStream
   */
  streamName?: string;
  /**
   * @example
   * https://example.aliyundoc.com/xxxApp/3402000****320000001.m3u8
   */
  streamUrl?: string;
  /**
   * @example
   * 3888920****8138204-cn-qingdao
   */
  transcodeId?: string;
  /**
   * @example
   * yes
   */
  transcoded?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clientAddr: 'ClientAddr',
      domainName: 'DomainName',
      edgeNodeAddr: 'EdgeNodeAddr',
      publishDomain: 'PublishDomain',
      publishTime: 'PublishTime',
      publishType: 'PublishType',
      publishUrl: 'PublishUrl',
      stopTime: 'StopTime',
      streamName: 'StreamName',
      streamUrl: 'StreamUrl',
      transcodeId: 'TranscodeId',
      transcoded: 'Transcoded',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clientAddr: 'string',
      domainName: 'string',
      edgeNodeAddr: 'string',
      publishDomain: 'string',
      publishTime: 'string',
      publishType: 'string',
      publishUrl: 'string',
      stopTime: 'string',
      streamName: 'string',
      streamUrl: 'string',
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

