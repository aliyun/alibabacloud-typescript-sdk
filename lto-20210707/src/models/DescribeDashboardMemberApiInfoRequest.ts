// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDashboardMemberApiInfoRequest extends $dara.Model {
  bizChainId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  endTime?: number;
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      bizChainId: 'BizChainId',
      endTime: 'EndTime',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizChainId: 'string',
      endTime: 'number',
      regionId: 'string',
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

