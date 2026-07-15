// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateAppGroupResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Application Group ID.
   * 
   * @example
   * 6607
   */
  appGroupId?: number;
  /**
   * @remarks
   * The Application Key (AppKey).
   * 
   * @example
   * adcExHZviL******
   */
  appKey?: string;
  static names(): { [key: string]: string } {
    return {
      appGroupId: 'AppGroupId',
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupId: 'number',
      appKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Information about the created Application Group.
   */
  data?: CreateAppGroupResponseBodyData;
  /**
   * @remarks
   * The error message. Returned only when the request fails.
   * 
   * @example
   * Your request is denied as lack of ssl protect.
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier for the request.
   * 
   * @example
   * 883AFE93-FB03-4FA9-A958-E750C6DE120C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the Application Group was successfully created. Valid values:
   * 
   * - **true**: The Application Group was successfully created.
   * 
   * - **false**: The Application Group failed to be created.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CreateAppGroupResponseBodyData,
      message: 'string',
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

