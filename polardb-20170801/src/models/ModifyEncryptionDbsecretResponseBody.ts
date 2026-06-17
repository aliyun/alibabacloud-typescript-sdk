// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEncryptionDBSecretResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * pc-***************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * > If the request is successful, \\`Successful\\` is returned. If the request fails, an error message is returned, such as an error code.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4CE6DF97-AEA4-484F-906F-C407EE******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

