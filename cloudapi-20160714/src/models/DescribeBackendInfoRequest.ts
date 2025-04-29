// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackendInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backend service.
   * 
   * @example
   * 739b68751c0b4e899e04d0c92b6d0be7
   */
  backendId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      backendId: 'BackendId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendId: 'string',
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

