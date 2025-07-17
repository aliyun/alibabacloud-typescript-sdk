// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteIntegrationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the alert integration is deleted. Valid values:
   * 
   * *   true
   * *   false
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
   * 34ED024E-9E31-434A-9E4E-D9D15C3****
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

