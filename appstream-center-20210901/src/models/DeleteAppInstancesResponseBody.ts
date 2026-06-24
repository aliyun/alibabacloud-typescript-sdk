// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAppInstancesResponseBodyDeleteAppInstanceModels extends $dara.Model {
  /**
   * @remarks
   * The application instance ID.
   * 
   * @example
   * ai-gbuea*****
   */
  appInstanceId?: string;
  /**
   * @remarks
   * The error code returned when an error occurs.
   * 
   * @example
   * InvalidParameter.ProductType
   */
  code?: string;
  /**
   * @remarks
   * The error message returned when an error occurs.
   * 
   * @example
   * The parameter ProductType is invalid.
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the deletion is triggered.
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

export class DeleteAppInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of instance deletion results.
   */
  deleteAppInstanceModels?: DeleteAppInstancesResponseBodyDeleteAppInstanceModels[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteAppInstanceModels: 'DeleteAppInstanceModels',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteAppInstanceModels: { 'type': 'array', 'itemType': DeleteAppInstancesResponseBodyDeleteAppInstanceModels },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deleteAppInstanceModels)) {
      $dara.Model.validateArray(this.deleteAppInstanceModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

