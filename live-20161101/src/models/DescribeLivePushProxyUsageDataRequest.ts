// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLivePushProxyUsageDataRequest extends $dara.Model {
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
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. The end time must be later than the start time.
   * 
   * @example
   * 2022-10-10T21:00:00Z
   */
  endTime?: string;
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
   * If you do not specify this parameter, data of all regions is aggregated and returned by default.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  regionId?: string;
  /**
   * @remarks
   * The key that is used to group data. If you do not specify this parameter, the default value region is used. Data is aggregated and returned. Separate multiple keys with commas (,). Valid values:
   * 
   * *   domain: The value of DomainName in the response takes effect only if SplitBy is set to domain.
   * *   region: This is the default value. The value of Region in the response takes effect only if SplitBy is set to region.
   * 
   * @example
   * region
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
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      region: 'Region',
      regionId: 'RegionId',
      splitBy: 'SplitBy',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      ownerId: 'number',
      region: 'string',
      regionId: 'string',
      splitBy: 'string',
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

