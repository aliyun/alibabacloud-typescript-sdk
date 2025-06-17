// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFCTriggerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EC046C5D-8CB4-4B6B-B7F8-B335E51EF90E
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

