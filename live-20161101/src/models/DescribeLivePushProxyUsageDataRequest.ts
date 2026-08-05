// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLivePushProxyUsageDataRequest extends $dara.Model {
  /**
   * @remarks
   * The ingest domain name of the streamer to query.
   * - You can specify a single domain name or multiple domain names separated by commas (,).
   * - If this parameter is left empty, the aggregated data of all live streaming domain names is returned by default.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2022-10-10T21:00:00Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * The live center to query. You can specify multiple regions separated by commas (,). Valid values:
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
   * cn-beijing
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
   * The grouping key. If this parameter is left empty, the default value is region, and the aggregated data is returned. You can specify multiple values separated by commas (,). Valid values:
   * - domain: the domain name. If SplitBy is set to domain, the Domain field in the response takes effect.
   * - region (default): the live center region. If SplitBy is set to region, the Region field in the response takes effect.
   * 
   * @example
   * region
   */
  splitBy?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC. By default, data from the last seven days is returned.
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

