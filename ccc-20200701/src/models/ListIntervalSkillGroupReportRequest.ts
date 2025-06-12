// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntervalSkillGroupReportRequest extends $dara.Model {
  /**
   * @example
   * 1604725528000
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * Hourly
   */
  interval?: string;
  mediaType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * skg-default@ccc-test
   */
  skillGroupId?: string;
  /**
   * @example
   * 1604639129000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      interval: 'Interval',
      mediaType: 'MediaType',
      skillGroupId: 'SkillGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      interval: 'string',
      mediaType: 'string',
      skillGroupId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

