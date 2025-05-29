// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIMVInfosResponseBodyImvInfos extends $dara.Model {
  /**
   * @remarks
   * The name of the table based on which the materialized view is created.
   * 
   * @example
   * "public."t2"
   */
  base?: string;
  /**
   * @remarks
   * The dependency between the materialized view and the base table and all metric values, which can be used to build a lineage graph.
   * 
   * @example
   * {\\"maintenance_calls\\" : 1, \\"avg_apply_time\\" : 2, \\"avg_calc_rows\\" : 1, \\"avg_calc_time\\" : 11, \\"avg_delta_rows\\" : 1, \\"avg_maintenance_total_time\\" : 14, \\"avg_maintenance_total_time_total\\" : 14, \\"max_apply_time\\" : 2, \\"max_calc_rows\\" : 1, \\"max_calc_time\\" : 11, \\"max_delta_rows\\" : 1, \\"max_maintenance_total_time\\" : 14, \\"max_maintenance_total_time_total\\" : 14, \\"min_apply_time\\" : 2, \\"min_calc_rows\\" : 1, \\"min_calc_time\\" : 11, \\"min_delta_rows\\" : 1, \\"min_maintenance_total_time\\" : 14, \\"min_maintenance_total_time_total\\" : 14, \\"max_outerjoin_apply_time\\" : null, \\"max_outerjoin_calc_rows\\" : null, \\"max_outerjoin_calc_time\\" : null, \\"max_outerjoin_delta_rows\\" : null, \\"avg_outerjoin_apply_time\\" : null, \\"avg_outerjoin_calc_rows\\" : null, \\"avg_outerjoin_calc_time\\" : null, \\"avg_outerjoin_delta_rows\\" : null, \\"min_outerjoin_apply_time\\" : null, \\"min_outerjoin_calc_rows\\" : null, \\"min_outerjoin_calc_time\\" : null, \\"min_outerjoin_delta_rows\\" : null, \\"create_rows\\" : null, \\"create_time\\" : null, \\"direct_visited\\" : null, \\"indirect_visited\\" : null, \\"max_refresh_rows\\" : null, \\"max_refresh_time\\" : null, \\"avg_refresh_rows\\" : null, \\"avg_refresh_time\\" : null, \\"min_refresh_rows\\" : null, \\"min_refresh_time\\" : null, \\"refresh_calls\\" : null, \\"avg_wait_lock_time\\" : null, \\"max_wait_lock_time\\" : null, \\"min_wait_lock_time\\" : null, \\"latest_maintenance_time\\" : \\"2023-08-09T07:39:14.753252+00:00\\"}
   */
  detailInfo?: string;
  /**
   * @remarks
   * The name of the materialized view.
   * 
   * @example
   * public."mv1"
   */
  MV?: string;
  static names(): { [key: string]: string } {
    return {
      base: 'Base',
      detailInfo: 'DetailInfo',
      MV: 'MV',
    };
  }

  static types(): { [key: string]: any } {
    return {
      base: 'string',
      detailInfo: 'string',
      MV: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

