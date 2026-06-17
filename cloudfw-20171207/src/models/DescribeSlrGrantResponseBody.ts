// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlrGrantResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the authorization is successful.
   * 
   * @example
   * true
   */
  isGranted?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1BD3D277-AE2F-5609-893F-FF7A72A****
   */
  requestId?: string;
  /**
   * @remarks
   * The type of the account.
   * 
   * @example
   * sub
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      isGranted: 'IsGranted',
      requestId: 'RequestId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isGranted: 'boolean',
      requestId: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

