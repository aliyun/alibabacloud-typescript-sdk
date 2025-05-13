// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAppGroupResponseBodyData } from "./CreateAppGroupResponseBodyData";


export class CreateAppGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The information about the job group.
   */
  data?: CreateAppGroupResponseBodyData;
  /**
   * @remarks
   * The error message that is returned only if the corresponding error occurs.
   * 
   * @example
   * Your request is denied as lack of ssl protect.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 883AFE93-FB03-4FA9-A958-E750C6DE120C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the application was created. Valid values:
   * 
   * *   **true**
   * *   **false**
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

