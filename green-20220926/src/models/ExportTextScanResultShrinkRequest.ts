// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportTextScanResultShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2024-03-11 10:00:00
   */
  endDate?: string;
  /**
   * @remarks
   * The query conditions.
   * 
   * @example
   * {"RequestId":"8488665D-32D3-5DD6-8BF1-B4DE21A7C3E9"}
   */
  queryShrink?: string;
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
   * The start time of the query. Format: yyyy-MM-dd HH:mm:ss.
   * 
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

