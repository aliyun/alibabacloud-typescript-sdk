// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTextStreamResponseBody extends $dara.Model {
  /**
   * @example
   * false
   */
  end?: boolean;
  /**
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      index: 'index',
      message: 'message',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'boolean',
      index: 'number',
      message: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

