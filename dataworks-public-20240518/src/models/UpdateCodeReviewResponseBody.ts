// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCodeReviewResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * request-id
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the approval is successful. This does not indicate that the publish process is complete.
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

