// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAiAppStatsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to aggregate by month. Default value: false.
   * 
   * @example
   * false
   */
  byMonth?: boolean;
  /**
   * @remarks
   * The query end date.
   * 
   * @example
   * 2026-01-02 00:00:00
   */
  endDate?: string;
  /**
   * @remarks
   * The query condition.
   * 
   * @example
   * {}
   */
  query?: string;
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
   * The query start date.
   * 
   * @example
   * 2026-01-01 00:00:00
   */
  startDate?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * sensitive_data
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      byMonth: 'ByMonth',
      endDate: 'EndDate',
      query: 'Query',
      regionId: 'RegionId',
      startDate: 'StartDate',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byMonth: 'boolean',
      endDate: 'string',
      query: 'string',
      regionId: 'string',
      startDate: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

