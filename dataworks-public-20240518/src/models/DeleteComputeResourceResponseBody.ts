// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteComputeResourceResponseBody extends $dara.Model {
  /**
   * @example
   * B56432E0-2112-5C97-88D0-AA0AE5****
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

