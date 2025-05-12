// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery chain.
   * 
   * @example
   * chi-02ymhtwl3cq8****
   */
  chainId?: string;
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4BC03B36-E515-5806-99AC-268AE3C0****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      chainId: 'ChainId',
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chainId: 'string',
      code: 'string',
      isSuccess: 'boolean',
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

