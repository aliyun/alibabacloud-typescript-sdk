// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartCollectorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 84B4038A-AF38-4BF4-9FAD-EA92A4FFF00A
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result. Valid values:
   * 
   * - true: The restart was successful.
   * - false: The restart failed.
   * 
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

