// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataAgentTaskModelUsageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The start time of the query time range. The value is a UNIX timestamp in seconds. The recommended interval length is no longer than one month.
   * 
   * @example
   * 1735660800
   */
  beginTime?: number;
  /**
   * @remarks
   * The current Data Management unit.
   * 
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @remarks
   * The end time of the query time range. The value is a UNIX timestamp in seconds. The recommended interval length is no longer than one month.
   * 
   * @example
   * 1735747200
   */
  endTime?: number;
  instanceIdsShrink?: string;
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
      instanceIdsShrink: 'InstanceIds',
      payLevel: 'PayLevel',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      DMSUnit: 'string',
      endTime: 'number',
      instanceIdsShrink: 'string',
      payLevel: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

