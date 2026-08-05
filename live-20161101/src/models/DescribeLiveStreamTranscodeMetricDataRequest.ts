// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamTranscodeMetricDataRequest extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * app
   */
  appName?: string;
  /**
   * @remarks
   * The domain name. Only a single domain name can be queried at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time. The end time must be later than the start time. Format: yyyy-MM-ddTHH:mm:ssZ (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-06-11T03:46:40Z
   */
  endTime?: string;
  /**
   * @remarks
   * The paged query token. Each query returns a maximum of 5,000 rows of data. If the data to be queried exceeds 5,000 rows, the response provides the start index for the next query.
   * 
   * Pass this token in the request to continue querying data from the row after the last row returned in the previous query. This token is used for paging.
   * 
   * @example
   * UjsM9x3aVcJi9a0-ArwJUTTC67C***37C0=
   */
  nextPageToken?: string;
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
   * The start time. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-06-11T02:46:40Z
   */
  startTime?: string;
  /**
   * @remarks
   * The stream name.
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
      nextPageToken: 'NextPageToken',
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
      nextPageToken: 'string',
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

