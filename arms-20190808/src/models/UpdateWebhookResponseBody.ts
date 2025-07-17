// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWebhookResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result returned. Valid values:
   * 
   * *   `true`: The modification is successful.
   * *   `false`: The modification fails.
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
   * 16AF921B-8187-489F-9913-43C808B4****
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

