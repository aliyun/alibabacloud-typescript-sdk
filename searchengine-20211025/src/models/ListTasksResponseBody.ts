// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D39EE0F1-D7EF-5F46-B781-6BF4185308B0
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   * 
   * @example
   * {}
   */
  result?: any;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

