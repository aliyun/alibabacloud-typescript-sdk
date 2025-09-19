// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartDiscoverDatabaseTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the scan task.
   * 
   * @example
   * 48bced6d-2aee-4fa2-9aba-b846b77b****
   */
  createMark?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * F46921AF-CC55-5971-92C9-7E09E160****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      createMark: 'CreateMark',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createMark: 'string',
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

