// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLabelTableResponseBody extends $dara.Model {
  /**
   * @example
   * FFD39C0F-DD8D-51B2-864E-2842206DB0E8
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

