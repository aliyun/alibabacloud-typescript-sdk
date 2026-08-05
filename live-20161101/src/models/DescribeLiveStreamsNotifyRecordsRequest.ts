// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamsNotifyRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs. You can view the AppName on the [Stream Management](https://help.aliyun.com/document_detail/197397.html) page.
   * 
   * @example
   * app
   */
  appName?: string;
  /**
   * @remarks
   * The ingest domain.
   * 
   * This parameter is required.
   * 
   * @example
   * push.example1.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time. The end time must be later than the start time. Format: yyyy-MM-ddTHH:mm:ssZ (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2017-12-10T09:00:00Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size. Default value: 20. Maximum value: 500. Valid values: any integer from 1 to 500.
   * 
   * @example
   * 20
   */
  pageSize?: number;
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
   * The start time. Format: yyyy-MM-ddTHH:mm:ssZ (UTC).
   * 
   * > The start time must be within the last 7 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2017-12-10T08:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * Specifies whether the callback is successful. Valid values:
   * - success: Successful.
   * - failed: Failed.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The name of the live stream. You can view the StreamName on the [Stream Management](https://help.aliyun.com/document_detail/197397.html) page.
   * 
   * @example
   * stream
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startTime: 'StartTime',
      status: 'Status',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      endTime: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      startTime: 'string',
      status: 'string',
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

