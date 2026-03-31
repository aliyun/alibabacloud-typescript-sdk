// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStorageSizeSummaryRequest extends $dara.Model {
  /**
   * @example
   * 20241205
   */
  date?: string;
  /**
   * @example
   * cn-chengdu
   */
  region?: string;
  /**
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

