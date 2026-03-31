// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMmsJobResponseBody extends $dara.Model {
  /**
   * @example
   * 88
   */
  data?: number;
  /**
   * @example
   * 31BE216F-AEF7-581E-B9C9-DECEB5424AC4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
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

