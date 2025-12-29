// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuditHotelRequestAuditHotelReq extends $dara.Model {
  /**
   * @example
   * 同意
   */
  auditOpinion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 80d84ea8ed9e422fbad52715c8fc56f1
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      auditOpinion: 'AuditOpinion',
      hotelId: 'HotelId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditOpinion: 'string',
      hotelId: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuditHotelRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  auditHotelReq?: AuditHotelRequestAuditHotelReq;
  static names(): { [key: string]: string } {
    return {
      auditHotelReq: 'AuditHotelReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditHotelReq: AuditHotelRequestAuditHotelReq,
    };
  }

  validate() {
    if(this.auditHotelReq && typeof (this.auditHotelReq as any).validate === 'function') {
      (this.auditHotelReq as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

