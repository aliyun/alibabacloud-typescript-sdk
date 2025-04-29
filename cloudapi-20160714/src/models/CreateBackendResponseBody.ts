// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBackendResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the backend service.
   * 
   * @example
   * 0d105f80a8f340408bd34954d4e4ff22
   */
  backendId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 66D84355-164D-53ED-81FF-03DCF181DE24
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backendId: 'BackendId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendId: 'string',
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

