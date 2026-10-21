// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataAgentTaskModelUsageMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * The start time of the query time range. The value is a UNIX timestamp in seconds. The recommended time range is up to one month.
   * 
   * @example
   * 1735660800
   */
  beginTime?: string;
  /**
   * @remarks
   * The current DMS unit.
   * 
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @remarks
   * The end time of the query time range. The value is a UNIX timestamp in seconds. The recommended time range is up to one month.
   * 
   * @example
   * 1735747200
   */
  endTime?: string;
  /**
   * @remarks
   * The list of billing instance IDs to query.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The billing level.
   * 
   * @example
   * ENTERPRISE
   */
  payLevel?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      DMSUnit: 'DMSUnit',
      endTime: 'EndTime',
      instanceIds: 'InstanceIds',
      payLevel: 'PayLevel',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      DMSUnit: 'string',
      endTime: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      payLevel: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

