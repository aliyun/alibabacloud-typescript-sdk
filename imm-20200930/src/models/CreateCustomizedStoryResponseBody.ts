// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomizedStoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the story.
   * 
   * @example
   * 563062c0b085733f34ab****
   */
  objectId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BC91D091-D49F-0ACD-95D5-F0621045****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      objectId: 'ObjectId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectId: 'string',
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

