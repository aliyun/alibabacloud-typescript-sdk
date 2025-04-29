// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiHistoryResponseBodyBackendConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the backend service.
   * 
   * @example
   * a0305308908c4740aba9cbfd63ba99b7
   */
  backendId?: string;
  /**
   * @remarks
   * The name of the backend service.
   * 
   * @example
   * zmapi
   */
  backendName?: string;
  /**
   * @remarks
   * The type of the backend service.
   * 
   * @example
   * HTTP
   */
  backendType?: string;
  static names(): { [key: string]: string } {
    return {
      backendId: 'BackendId',
      backendName: 'BackendName',
      backendType: 'BackendType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendId: 'string',
      backendName: 'string',
      backendType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

