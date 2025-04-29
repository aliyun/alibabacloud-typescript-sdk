// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackendResponseBody extends $dara.Model {
  /**
   * @example
   * 06DACA61-9359-5EC6-AEDA-C73E620E49A9
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

