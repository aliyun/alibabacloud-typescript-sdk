// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBusinessOpportunityRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * esp.hightech
   */
  bizType?: string;
  contactName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 18704330000
   */
  mobile?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  source?: number;
  /**
   * @example
   * 345674
   */
  VCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      contactName: 'ContactName',
      mobile: 'Mobile',
      source: 'Source',
      VCode: 'VCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      contactName: 'string',
      mobile: 'string',
      source: 'number',
      VCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

