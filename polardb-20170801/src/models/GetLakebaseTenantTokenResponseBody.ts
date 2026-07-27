// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLakebaseTenantTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The associated PolarDB instance ID.
   * 
   * @example
   * pc-xxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CD35F3-F3-44CA-AFFF-BAF869******
   */
  requestId?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * ACTIVATION
   */
  status?: string;
  /**
   * @remarks
   * The mount subdirectory.
   * 
   * @example
   * /home/project
   */
  subdir?: string;
  /**
   * @remarks
   * The tenant identifier.
   * 
   * @example
   * admin
   */
  tenant?: string;
  /**
   * @remarks
   * The tenant token.
   * 
   * @example
   * ***
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      requestId: 'RequestId',
      status: 'Status',
      subdir: 'Subdir',
      tenant: 'Tenant',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      requestId: 'string',
      status: 'string',
      subdir: 'string',
      tenant: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

