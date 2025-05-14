// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteModelFeatureResponseBody extends $dara.Model {
  /**
   * @example
   * 6B662A64-E4BF-56F8-BF5F-4C63F34EC0A8
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

