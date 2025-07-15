// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveTerminalsResponseBodyTerminals extends $dara.Model {
  /**
   * @remarks
   * The returned status code. A value of 0 indicates that the request is successful. If the request fails, an error message is returned.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 1811****
   */
  id?: string;
  /**
   * @remarks
   * The result of removing the specified users from the channel. Valid values:
   * 
   * *   Success
   * *   Failed
   * 
   * @example
   * Success
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      id: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTerminalsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4AF8
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the users.
   */
  terminals?: RemoveTerminalsResponseBodyTerminals[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      terminals: 'Terminals',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      terminals: { 'type': 'array', 'itemType': RemoveTerminalsResponseBodyTerminals },
    };
  }

  validate() {
    if(Array.isArray(this.terminals)) {
      $dara.Model.validateArray(this.terminals);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

