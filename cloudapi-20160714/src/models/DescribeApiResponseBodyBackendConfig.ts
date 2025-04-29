// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiResponseBodyBackendConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the backend service.
   * 
   * @example
   * 0038e00c3dca44fcba3a94015d8f5bbf
   */
  backendId?: string;
  /**
   * @remarks
   * The name of the backend service.
   * 
   * @example
   * testoss
   */
  backendName?: string;
  /**
   * @remarks
   * Backend service type
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

