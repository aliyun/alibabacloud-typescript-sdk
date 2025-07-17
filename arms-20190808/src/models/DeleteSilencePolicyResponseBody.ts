// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSilencePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the silence policy was deleted successfully. Valid values:
   * 
   * *   `true`: The silence policy was deleted successfully.
   * *   `false`: The silence policy failed to be deleted.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The operation that you want to perform. Set the value to **DeleteSilencePolicy**.
   * 
   * @example
   * A5EC8221-08F2-4C95-9AF1-49FD998C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

