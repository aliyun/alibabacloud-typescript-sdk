// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStorageAmountSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The date for which the statistics are collected. The statistics are collected on a daily basis. Specify the date in the YYYYMMDD format.
   * 
   * @example
   * 20241205
   */
  date?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The tenant ID. You can log on to the MaxCompute console and choose **Tenant Management** > **Tenant Properties** in the navigation pane on the left to view the tenant ID.
   * 
   * @example
   * 478403690625249
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'date',
      region: 'region',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      region: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

