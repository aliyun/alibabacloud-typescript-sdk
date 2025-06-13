// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportTextScanResultShrinkRequest extends $dara.Model {
  /**
   * @example
   * 2024-03-11 10:00:00
   */
  endDate?: string;
  queryShrink?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * 2024-03-10 10:00:00
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      queryShrink: 'Query',
      regionId: 'RegionId',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      queryShrink: 'string',
      regionId: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

