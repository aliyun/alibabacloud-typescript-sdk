// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLiveCenterTransferRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs. The value of this parameter must be the same as the application name for the live stream that you want to relay. Otherwise, the configuration does not take effect. You can view the application name on the [Stream Management](https://help.aliyun.com/document_detail/197397.html) page of the ApsaraVideo Live console.
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
   * The third-party URL to which the live stream is relayed. You can add only one URL.
   * 
   * >  The protocol that the URL uses must be the same as the protocol of the live stream. Only URLs over RTMP and SRT are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * rtmp://push.example2.aliyunlive.com/testapp1/teststream2
   */
  dstUrl?: string;
  /**
   * @remarks
   * The end time of stream relay. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * >  The end time must be later than the start time.
   * 
   * @example
   * 2017-12-22T08:00:00Z
   */
  endTime?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The start time of stream relay. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2017-12-21T10:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the live stream. You can view the stream name on the [Stream Management](https://help.aliyun.com/document_detail/197397.html) page of the ApsaraVideo Live console.
   * 
   * This parameter is required.
   * 
   * @example
   * teststream
   */
  streamName?: string;
  /**
   * @remarks
   * The validity period of stream relay. Valid values:
   * 
   * *   **always**: The stream can always be relayed.
   * *   **time**: The stream can be relayed in a specified time period.
   * 
   * >  If you set this parameter to **time**, **StartTime** and **EndTime** are required.
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

