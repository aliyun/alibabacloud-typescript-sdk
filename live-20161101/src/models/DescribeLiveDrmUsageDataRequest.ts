// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDrmUsageDataRequest extends $dara.Model {
  /**
   * @remarks
   * The live streaming domain name.
   * - You can specify a single domain name or multiple domain names. Separate multiple domain names with commas (,).
   * - If this parameter is left empty, the merged data of all live streaming domain names is returned by default.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-05-02T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity of the queried data. Unit: seconds. Valid values:
   * - 300
   * - 3600
   * - 86400
   * 
   * If you do not set this parameter or set it to an unsupported value, the default value 3600 is used.
   * 
   * @example
   * 3600
   */
  interval?: string;
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
   * The grouping key. Default value: domain,region,drm_type. You can specify one or more of the following values: domain, region, and drm_type. Separate multiple values with commas (,). Set this parameter to an empty string or null to disable grouping by these keys.
   * 
   * @example
   * domain,region,drm_type
   */
  splitBy?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC. The minimum data granularity is 5 minutes.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-05-01T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      interval: 'Interval',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      splitBy: 'SplitBy',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      interval: 'string',
      ownerId: 'number',
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

