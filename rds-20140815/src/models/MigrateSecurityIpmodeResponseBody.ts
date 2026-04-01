// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateSecurityIPModeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EF1E53AB-5625-49C7-ADF1-FBD0B6640D19
   */
  requestId?: string;
  /**
   * @remarks
   * The whitelist mode after the change, which is the enhanced whitelist mode.
   * 
   * Valid values:
   * 
   * *   safety
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     enhanced whitelist mode
   * 
   *     <!-- -->
   * 
   * @example
   * safety
   */
  securityIPMode?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      requestId: 'RequestId',
      securityIPMode: 'SecurityIPMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      requestId: 'string',
      securityIPMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

