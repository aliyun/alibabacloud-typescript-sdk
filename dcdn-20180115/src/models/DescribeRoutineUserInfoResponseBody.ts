// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRoutineUserInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The content returned by calling the operation.
   */
  content?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 691DEEE5-4BDB-47F3-930E-F57176427717
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.content) {
      $dara.Model.validateMap(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

