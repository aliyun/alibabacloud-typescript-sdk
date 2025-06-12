// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListFoCreatedAppsResponseBodyData } from "./ListFoCreatedAppsResponseBodyData";


export class ListFoCreatedAppsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The templates.
   */
  data?: ListFoCreatedAppsResponseBodyData[];
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * Cannot find region according to your domain.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40F63F07-3AB6-53B3-8825-0580C130E3EA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListFoCreatedAppsResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

