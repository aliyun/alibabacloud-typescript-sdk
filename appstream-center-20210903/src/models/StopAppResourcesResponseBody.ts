// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopAppResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * InvalidAppInstanceGroup.NotFound
   */
  code?: string;
  /**
   * @example
   * The app instance group is not found.
   */
  message?: string;
  /**
   * @example
   * 829444D6-9FD3-5C65-A570-065975537647
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

