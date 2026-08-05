// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainStreamTranscodeDataRequest extends $dara.Model {
  /**
   * @remarks
   * The streaming domain of the streamer to query.
   * 
   * - You can query a single domain name or multiple domain names at a time. Separate multiple domain names with commas (,).
   * - If this parameter is left empty, the merged data of all live streaming domain names is returned by default.
   * - When you specify DomainName, make sure that the specified domain name is a live streaming domain name and that the user calling this operation has the permissions to operate on the specified domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2017-12-10T22:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity of the query. Unit: seconds. Valid values:
   * 
   * - **3600**: by hour.
   * - **86400**: by day.
   * 
   * > If this parameter is left empty, the default granularity is by hour.
   * 
   * @example
   * 3600
   */
  interval?: string;
  ownerId?: number;
  /**
   * @remarks
   * The time precision of the query. Valid values:
   * - **min** (default): in minutes.
   * - **sec**: in seconds.
   * 
   * @example
   * min
   */
  precision?: string;
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
   * The grouping key. Valid values:
   * 
   * - **domain**: domain name. If the Split (grouping key) parameter is set to domain, the Domain response parameter takes effect.
   * - **region**: live center region. If the Split (grouping key) parameter is set to region, the Region response parameter takes effect.
   * - **transcode_type**: transcoding type. If the Split (grouping key) parameter is set to transcode_type, the TanscodeType response parameter takes effect.
   * - **resolution**: resolution. If the Split (grouping key) parameter is set to resolution, the Resolution response parameter takes effect.
   * - **fps**: frame rate. If the Split (grouping key) parameter is set to fps, the Fps response parameter takes effect.
   * 
   * You can specify one or more values. Separate multiple values with commas (,).
   * 
   * Default value: `domain,region,transcode_type,resolution,fps`, which means all grouping keys are applied.
   * 
   * @example
   * domain
   */
  split?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format in UTC.
   * 
   * - The minimum data time granularity is 1 hour.
   * - If this parameter is left empty, data from the last 24 hours is read by default.
   * 
   * This parameter is required.
   * 
   * @example
   * 2017-12-10T20:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      interval: 'Interval',
      ownerId: 'OwnerId',
      precision: 'Precision',
      regionId: 'RegionId',
      split: 'Split',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      interval: 'string',
      ownerId: 'number',
      precision: 'string',
      regionId: 'string',
      split: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

