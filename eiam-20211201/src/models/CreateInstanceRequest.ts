// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Generate a parameter value from your client to ensure that the value is unique among different requests. The ClientToken value supports only ASCII characters and cannot exceed 64 characters in length. If you retry a request with the same ClientToken value, the complete response of the initial call is returned without creating a duplicate instance.
   * 
   * @example
   * client-token-example
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the instance. The description can be up to 128 characters in length.
   * 
   * @example
   * instance_for_test
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

