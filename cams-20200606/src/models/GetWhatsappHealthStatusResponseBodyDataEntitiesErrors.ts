// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWhatsappHealthStatusResponseBodyDataEntitiesErrors extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 141006
   */
  errorCode?: string;
  /**
   * @remarks
   * The description of the error.
   * 
   * @example
   * There is an error with the payment method.
   */
  errorDescription?: string;
  /**
   * @remarks
   * The possible solution to the error.
   * 
   * @example
   * There was an error with your payment method. Please add a new payment method to the account.
   */
  possibleSolution?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorDescription: 'ErrorDescription',
      possibleSolution: 'PossibleSolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorDescription: 'string',
      possibleSolution: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

