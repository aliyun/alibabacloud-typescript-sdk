// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainWithIntegrityRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the ISO 8601 standard. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2017-10-10T20:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The integrity.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.95
   */
  integrity?: number;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2017-10-10T20:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      integrity: 'Integrity',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      integrity: 'number',
      ownerId: 'number',
      regionId: 'string',
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

