// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLifecyclePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the lifecycle policy.
   * 
   * @example
   * lsp-bp1234567890ab****
   */
  lifecyclePolicyId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BC7C825C-5F65-4B56-BEF6-98C56C7C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      lifecyclePolicyId: 'LifecyclePolicyId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lifecyclePolicyId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

