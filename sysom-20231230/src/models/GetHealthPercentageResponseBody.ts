// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetHealthPercentageResponseBodyData } from "./GetHealthPercentageResponseBodyData";


export class GetHealthPercentageResponseBody extends $dara.Model {
  /**
   * @example
   * SysomOpenAPI.ServerError
   */
  code?: string;
  data?: GetHealthPercentageResponseBodyData[];
  /**
   * @example
   * ""
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetHealthPercentageResponseBodyData },
      message: 'string',
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

