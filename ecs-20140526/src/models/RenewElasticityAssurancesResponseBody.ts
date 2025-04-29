// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RenewElasticityAssurancesResponseBodyPrivatePoolOptionsIdSet } from "./RenewElasticityAssurancesResponseBodyPrivatePoolOptionsIdSet";


export class RenewElasticityAssurancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the renewal order.
   * 
   * @example
   * 182372800****
   */
  orderId?: string;
  /**
   * @remarks
   * The IDs of the elasticity assurances.
   */
  privatePoolOptionsIdSet?: RenewElasticityAssurancesResponseBodyPrivatePoolOptionsIdSet;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      privatePoolOptionsIdSet: 'PrivatePoolOptionsIdSet',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      privatePoolOptionsIdSet: RenewElasticityAssurancesResponseBodyPrivatePoolOptionsIdSet,
      requestId: 'string',
    };
  }

  validate() {
    if(this.privatePoolOptionsIdSet && typeof (this.privatePoolOptionsIdSet as any).validate === 'function') {
      (this.privatePoolOptionsIdSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

