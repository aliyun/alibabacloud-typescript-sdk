// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryInspirationBalanceForPartnerRequest extends $dara.Model {
  /**
   * @remarks
   * The owner ID, which can be a website ID or an Alibaba Cloud account ID.
   * 
   * @example
   * 123456
   */
  belongId?: string;
  /**
   * @remarks
   * The type of the owner ID. Valid values: siteId and uid.
   * 
   * @example
   * USER
   */
  belongIdType?: string;
  static names(): { [key: string]: string } {
    return {
      belongId: 'BelongId',
      belongIdType: 'BelongIdType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      belongId: 'string',
      belongIdType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

