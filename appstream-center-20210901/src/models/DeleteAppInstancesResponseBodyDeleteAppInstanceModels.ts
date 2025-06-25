// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAppInstancesResponseBodyDeleteAppInstanceModels extends $dara.Model {
  /**
   * @remarks
   * The ID of the application instance.
   * 
   * @example
   * ai-gbuea*****
   */
  appInstanceId?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidParameter.ProductType
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The parameter ProductType is invalid.
   */
  message?: string;
  /**
   * @remarks
   * Specifies whether the application instance is deleted.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      appInstanceId: 'AppInstanceId',
      code: 'Code',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceId: 'string',
      code: 'string',
      message: 'string',
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

