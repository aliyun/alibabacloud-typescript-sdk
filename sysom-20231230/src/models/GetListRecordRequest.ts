// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetListRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the analysis record to query the status of.
   * 
   * @example
   * xxxxxxxxx-f37b-478d-87f6-2259ed8766bf
   */
  analysisId?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 5
   */
  current?: number;
  customId?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      analysisId: 'analysisId',
      current: 'current',
      customId: 'customId',
      pageSize: 'pageSize',
      region: 'region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisId: 'string',
      current: 'number',
      customId: 'number',
      pageSize: 'number',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

