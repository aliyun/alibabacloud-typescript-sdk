// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The delivery chain ID.
   * 
   * @example
   * chi-02ymhtwl3cq8****
   */
  chainId?: string;
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The request ID.
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

