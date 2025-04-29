// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DisableActivationResponseBodyActivation } from "./DisableActivationResponseBodyActivation";


export class DisableActivationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the activation code was created.
   */
  activation?: DisableActivationResponseBodyActivation;
  /**
   * @remarks
   * Details about the activation code and its usage information.
   * 
   * @example
   * 4ECEEE12-56F1-4FBC-9AB1-890F74942176
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      activation: 'Activation',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activation: DisableActivationResponseBodyActivation,
      requestId: 'string',
    };
  }

  validate() {
    if(this.activation && typeof (this.activation as any).validate === 'function') {
      (this.activation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

