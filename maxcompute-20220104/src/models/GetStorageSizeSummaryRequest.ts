// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStorageSizeSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The date of statistics. The value is at the day level. The format is YYYYMMdd.
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
   * cn-chengdu
   */
  region?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 483212237127906
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

