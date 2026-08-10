// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRiskStatsRequest extends $dara.Model {
  /**
   * @remarks
   * The classification.
   * 
   * @example
   * guard-scene
   */
  classify?: string;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 2026-01-02 00:00:00
   */
  endTime?: string;
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
   * The start time.
   * 
   * @example
   * 2026-01-01 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The type.
   * 
   * This parameter is required.
   * 
   * @example
   * RealTime
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      classify: 'Classify',
      endTime: 'EndTime',
      regionId: 'RegionId',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classify: 'string',
      endTime: 'string',
      regionId: 'string',
      startTime: 'string',
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

