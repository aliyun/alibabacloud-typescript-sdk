// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAliDingMinutesContentRequest extends $dara.Model {
  /**
   * @remarks
   * The DingTalk minutes ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 76327569643231383535353939365f3436383537393431335f32
   */
  minutesId?: string;
  /**
   * @remarks
   * The ID of the effective tenant.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      minutesId: 'minutesId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      minutesId: 'string',
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

