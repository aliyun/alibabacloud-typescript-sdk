// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreCapacityResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the release command has been sent. Valid values:
   * 
   * *   true: The command has been sent and the storage space is being released.
   * *   false: The command failed to be sent.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-58D4-55B2-87B9-74D413F7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

