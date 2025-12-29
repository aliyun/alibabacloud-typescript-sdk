// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuditHotelShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  auditHotelReqShrink?: string;
  static names(): { [key: string]: string } {
    return {
      auditHotelReqShrink: 'AuditHotelReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditHotelReqShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

