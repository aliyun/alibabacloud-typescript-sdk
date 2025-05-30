// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQuotaUsageRequest extends $dara.Model {
  /**
   * @remarks
   * The aggregation algorithm. For a better page experience, up to 60 points can be displayed for each metric. If you select a time range longer than 1 hour, the chart uses the average value within the range (minutes of the selected time range/60) to aggregate data by default. You can change the aggregation algorithm based on your business requirements.
   * 
   * @example
   * max
   */
  aggMethod?: string;
  /**
   * @remarks
   * The time when the query starts. The value is the log time that is specified when log data is written.
   * 
   * *   The time range that is specified in this operation is a left-closed, right-open interval. The interval includes the start time specified by the **from** parameter, but does not include the end time specified by the **to** parameter. If you set the **from** and **to** parameters to the same value, the time range is invalid and an error message is returned.
   * *   This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1669081045
   */
  from?: number;
  /**
   * @remarks
   * The types of the charts.
   */
  plotTypes?: string[];
  /**
   * @remarks
   * The quota type. Default value: ODPS.
   * 
   * *   ODPS: computing quota
   * *   TUNNEL: Tunnel quota
   * 
   * @example
   * ODPS
   */
  productId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-chengdu
   */
  region?: string;
  /**
   * @remarks
   * The alias of the level-2 quota.
   * 
   * @example
   * ot_tunnel_quota
   */
  subQuotaNickname?: string;
  /**
   * @remarks
   * The ID of the tenant. You can log on to the MaxCompute console, and choose Tenants > Tenant Property from the left-side navigation pane to view the tenant ID.
   * 
   * @example
   * 478403690625249
   */
  tenantId?: string;
  /**
   * @remarks
   * The time when the query ends. The value is the log time that is specified when log data is written.
   * 
   * *   The time range that is specified in this operation is a left-closed, right-open interval. The interval includes the start time specified by the **from** parameter, but does not include the end time specified by the **to** parameter. If you set the **from** and **to** parameters to the same value, the time range is invalid and an error message is returned.
   * *   This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1669360870
   */
  to?: number;
  /**
   * @remarks
   * The data metric fields.
   */
  yAxisTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      aggMethod: 'aggMethod',
      from: 'from',
      plotTypes: 'plotTypes',
      productId: 'productId',
      region: 'region',
      subQuotaNickname: 'subQuotaNickname',
      tenantId: 'tenantId',
      to: 'to',
      yAxisTypes: 'yAxisTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggMethod: 'string',
      from: 'number',
      plotTypes: { 'type': 'array', 'itemType': 'string' },
      productId: 'string',
      region: 'string',
      subQuotaNickname: 'string',
      tenantId: 'string',
      to: 'number',
      yAxisTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.plotTypes)) {
      $dara.Model.validateArray(this.plotTypes);
    }
    if(Array.isArray(this.yAxisTypes)) {
      $dara.Model.validateArray(this.yAxisTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

