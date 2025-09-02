// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDataSourceShareResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The reason why the data source failed to be shared. If the data source is successfully shared, the value of this parameter is an empty string.
   * 
   * @example
   * datasource is wrong
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the data source was shared. Valid values:
   * 
   * *   success.
   * *   fail. You can view the value of the Message parameter to identify the cause of the failure.
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDataSourceShareResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the sharing operation.
   */
  data?: SetDataSourceShareResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0000-ABCD-EFG
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
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
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SetDataSourceShareResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

