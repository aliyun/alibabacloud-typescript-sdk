// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStorageAmountSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The date for statistics collection. The value is at the day level and must be in the YYYYMMdd format.
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
   * The tenant ID. You can view the tenant ID by logging on to the MaxCompute console and choosing **Tenant Management** > **Tenant Properties** in the left-side navigation pane.
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

