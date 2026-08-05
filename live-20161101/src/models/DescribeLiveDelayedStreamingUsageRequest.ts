// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDelayedStreamingUsageRequest extends $dara.Model {
  /**
   * @remarks
   * The streaming domain name to query.
   * - You can specify a single domain name or multiple domain names. Separate multiple domain names with commas (,).
   * - If this parameter is left empty, the aggregated data of all live streaming domain names is returned by default.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. The time span cannot exceed 10 hours. Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2022-10-10T21:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity of the queried data. Unit: seconds. Valid values:
   * - 300
   * - 3600
   * - 86400
   * 
   * If this parameter is left empty or set to an unsupported value, the default value 3600 is used.
   * 
   * @example
   * 3600
   */
  interval?: string;
  ownerId?: number;
  /**
   * @remarks
   * The live center to query. You can specify multiple regions. Separate multiple regions with commas (,). Valid values:
   * - cn-beijing: Beijing
   * - cn-shanghai: Shanghai
   * - cn-shenzhen: Shenzhen
   * - cn-qingdao: Qingdao
   * - ap-southeast-1: Singapore
   * - eu-central-1: Germany
   * - ap-northeast-1: Tokyo
   * - ap-southeast-5: Jakarta
   * 
   * If this parameter is left empty, the aggregated data of all regions is returned by default.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
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
   * The grouping key. If this parameter is left empty, user data is aggregated. Valid values:
   * - domain: domain name. If the SplitBy (grouping key) parameter is set to domain, the Domain response parameter takes effect.
   * - region: live center region. If the SplitBy (grouping key) parameter is set to region, the Region response parameter takes effect.
   * - stream: stream name. If the SplitBy (grouping key) parameter is set to stream, the stream response parameter takes effect.
   * 
   * > You can query data only when the parameter corresponding to the grouping key is not empty. Otherwise, an error is returned. For example, when DomainName is empty, you cannot specify domain as the grouping key.
   * 
   * @example
   * domain
   */
  splitBy?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC. By default, data of the last seven days is returned.
   * 
   * @example
   * 2022-10-10T20:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The stream name. Separate multiple stream names with commas (,). By default, the data of all stream names is aggregated.
   * 
   * @example
   * liveStream****
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      interval: 'Interval',
      ownerId: 'OwnerId',
      region: 'Region',
      regionId: 'RegionId',
      splitBy: 'SplitBy',
      startTime: 'StartTime',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      interval: 'string',
      ownerId: 'number',
      region: 'string',
      regionId: 'string',
      splitBy: 'string',
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

