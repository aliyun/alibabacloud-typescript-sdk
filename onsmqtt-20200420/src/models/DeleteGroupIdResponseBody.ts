// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteGroupIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The common parameter. The ID of each request is unique.
   * 
   * @example
   * 0621DDD7-F0E9-4D35-8900-518116D6****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

