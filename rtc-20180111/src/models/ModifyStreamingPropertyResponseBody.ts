// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyStreamingPropertyResponseBody extends $dara.Model {
  /**
   * @example
   * E7C44674-9065-5BBA-AB77-A5F20908E73B
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

