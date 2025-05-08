// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetErServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The billing mode. Valid values:
   * 
   * *   er_paymode: billed for customers on the China site.
   * *   er_freemode: free for customers on the China site.
   * *   er_paymodeintl: billed for customers on the International site.
   * *   err_freemodeintl: free for customers on the International site
   * 
   * @example
   * er_paymode
   */
  planName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CB1A380B-09F0-41BB-A198-72F8FD6DA2FE
   */
  requestId?: string;
  /**
   * @remarks
   * The service status. Valid values:
   * 
   * *   Creating
   * *   Running
   * *   NotOpened
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      planName: 'PlanName',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planName: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

