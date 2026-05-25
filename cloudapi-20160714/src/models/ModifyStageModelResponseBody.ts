// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyStageModelResponseBody extends $dara.Model {
  /**
   * @example
   * 6C87A26A-6A18-4B8E-8099-705278381xxx
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

