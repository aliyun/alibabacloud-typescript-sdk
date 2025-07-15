// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDelayedStreamingUsageRequest extends $dara.Model {
  /**
   * @remarks
   * The main streaming domain to query.
   * 
   * *   You can query one or more domain names. If you specify multiple domain names, separate them with commas (,).
   * *   If you leave this parameter empty, the data of all domain names within your Alibaba Cloud account is returned.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. The end time must be later than the start time. We recommend that you specify a time range that is less than or equal to 10 hours.
   * 
   * @example
   * 2022-10-10T21:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity of the query. Unit: seconds. Valid values:
   * 
   * *   300
   * *   3600
   * *   86400
   * 
   * If you specify an invalid value or do not specify this parameter, the default value 3600 is used.
   * 
   * @example
   * 3600
   */
  interval?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region. Separate multiple region IDs with commas (,). Valid values:
   * 
   * *   cn-beijing: China (Beijing)
   * *   cn-shanghai: China (Shanghai)
   * *   cn-shenzhen: China (Shenzhen)
   * *   cn-qingdao: China (Qingdao)
   * *   ap-southeast-1: Singapore
   * *   eu-central-1: Germany (Frankfurt)
   * *   ap-northeast-1: Japan (Tokyo)
   * *   ap-southeast-5: Indonesia (Jakarta)
   * 
   * If you leave this parameter empty, data of all regions is aggregated and returned by default.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  regionId?: string;
  /**
   * @remarks
   * The key that is used to group data. If you leave this parameter empty, data is aggregated and returned. Valid values:
   * 
   * *   domain: The DomainName parameter in the response takes effect only if SplitBy is set to domain.
   * *   region: The Region parameter in the response takes effect only if SplitBy is set to region.
   * *   stream: The StreamName parameter in the response takes effect only if SplitBy is set to stream.
   * 
   * >  This parameter takes effect only if the parameter corresponding to the value of this parameter is not left empty. Otherwise, an error is returned. For example, you cannot set this parameter to domain if the DomainName parameter is left empty.
   * 
   * @example
   * domain
   */
  splitBy?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. By default, data in the last seven days is returned.
   * 
   * @example
   * 2022-10-10T20:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the stream. Separate multiple stream names with commas (,). By default, data of all streams is aggregated and returned.
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

