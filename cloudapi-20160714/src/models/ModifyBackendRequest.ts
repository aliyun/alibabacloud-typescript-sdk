// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackendRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20bcdc9453524b78a8beb1f6de21edb7
   */
  backendId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testHttpModify
   */
  backendName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HTTP
   */
  backendType?: string;
  /**
   * @example
   * test
   */
  description?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      backendId: 'BackendId',
      backendName: 'BackendName',
      backendType: 'BackendType',
      description: 'Description',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendId: 'string',
      backendName: 'string',
      backendType: 'string',
      description: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

