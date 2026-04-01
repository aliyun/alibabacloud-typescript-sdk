// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartLifecyclePolicyExecutionResponseBody extends $dara.Model {
  /**
   * @example
   * 70EACC9C-D07A-4A34-ADA4-77506C42****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

