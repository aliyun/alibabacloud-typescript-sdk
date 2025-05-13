// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveApmResponseBody extends $dara.Model {
  /**
   * @example
   * 29A879FB-86BF-54CA-9426-B769A099E1A1
   */
  requestId?: string;
  /**
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

