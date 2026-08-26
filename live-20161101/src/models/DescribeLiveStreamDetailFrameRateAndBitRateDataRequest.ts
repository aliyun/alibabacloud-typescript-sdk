// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamDetailFrameRateAndBitRateDataRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs. You can view the AppName on the [Stream Management](https://help.aliyun.com/document_detail/197397.html) page.
   * 
   * This parameter is required.
   * 
   * @example
   * AppName
   */
  appName?: string;
  /**
   * @remarks
   * The ingest domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC+8).
   * 
   * > If StartTime and EndTime are invalid or not specified, data from the last 1 hour is returned by default.
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
   * The start time. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC+8).
   * 
   * @example
   * 2017-12-21T08:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the live stream. You can view the StreamName on the [Stream Management](https://help.aliyun.com/document_detail/197397.html) page.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleStreamName
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      startTime: 'StartTime',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      endTime: 'string',
      ownerId: 'number',
      regionId: 'string',
      startTime: 'string',
      streamName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

