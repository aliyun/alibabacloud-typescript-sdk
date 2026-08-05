// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLiveCenterTransferRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the live stream application. The AppName you enter must be the same as the AppName of the live stream to be relayed for the configuration to take effect. You can view the AppName on the [Stream Management](https://help.aliyun.com/document_detail/197397.html) page.
   * 
   * This parameter is required.
   * 
   * @example
   * testapp
   */
  appName?: string;
  /**
   * @remarks
   * The streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The third-party live streaming address for relay. You can add up to one address.
   * 
   * >The protocol of the destination address must be the same as the protocol of the live stream to be relayed. Only RTMP and SRT relay addresses are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * rtmp://push.example2.aliyunlive.com/testapp1/teststream2
   */
  dstUrl?: string;
  /**
   * @remarks
   * The end time of the relay. The date format follows the ISO 8601 notation and uses UTC+0 time. The format is yyyy-MM-ddTHH:mm:ssZ.
   * 
   * >The end time must be later than the start time.
   * 
   * @example
   * 2017-12-22T08:00:00Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The start time of the relay. The date format follows the ISO 8601 notation and uses UTC+0 time. The format is yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2017-12-21T10:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the live stream. You can view the StreamName on the [Stream Management](https://help.aliyun.com/document_detail/197397.html) page.
   * 
   * This parameter is required.
   * 
   * @example
   * teststream
   */
  streamName?: string;
  /**
   * @remarks
   * The validity period of the relay. Valid values:
   * 
   * - **always**: permanently effective.
   * 
   * - **time**: effective within the specified time period.
   * 
   * >If the value is **time**, **StartTime** and **EndTime** are required.
   * 
   * This parameter is required.
   * 
   * @example
   * always
   */
  transferArgs?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      dstUrl: 'DstUrl',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      startTime: 'StartTime',
      streamName: 'StreamName',
      transferArgs: 'TransferArgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      dstUrl: 'string',
      endTime: 'string',
      ownerId: 'number',
      regionId: 'string',
      startTime: 'string',
      streamName: 'string',
      transferArgs: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

