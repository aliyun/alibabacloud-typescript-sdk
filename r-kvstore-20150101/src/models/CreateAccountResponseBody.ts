// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccountResponseBody extends $dara.Model {
  accountName?: string;
  /**
   * @remarks
   * The name of the account.
   * 
   * @example
   * demoaccount
   */
  acountName?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ABAF95F6-35C1-4177-AF3A-70969EBD****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      acountName: 'AcountName',
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      acountName: 'string',
      instanceId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

