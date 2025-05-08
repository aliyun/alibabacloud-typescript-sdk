// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBandwitdhByInternetChargeTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * *   Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * *   If the value of the seconds place is not 00, the start time is automatically set to the next minute.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-01-18T09:39:54Z
   */
  endTime?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou-cbn-2
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The Internet service provider (ISP). Valid values:
   * 
   * *   cmcc: China Mobile
   * *   telecom: China Telecom
   * *   unicom: China Unicom
   * *   multiCarrier: multi-line ISP
   * 
   * @example
   * unicom
   */
  isp?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * *   Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * *   If the value of the seconds place is not 00, the start time is automatically set to the next minute.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-11-15T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ensRegionId: 'EnsRegionId',
      isp: 'Isp',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      ensRegionId: 'string',
      isp: 'string',
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

