// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHealthPercentageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The health level of the node or pod.
   * 
   * @example
   * health
   */
  type?: string;
  /**
   * @remarks
   * The quantity.
   * 
   * @example
   * 1
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHealthPercentageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * - `code == Success` indicates that the authorization was successful.
   * - Other status codes indicate that the authorization failed. Check the `message` field for the detailed fault message.
   * 
   * @example
   * SysomOpenAPI.ServerError
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetHealthPercentageResponseBodyData[];
  /**
   * @remarks
   * The error details.
   * 
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

