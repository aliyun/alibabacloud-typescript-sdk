// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVideoProcessingResponseBody extends $dara.Model {
  /**
   * @example
   * 352816**********
   */
  configId?: number;
  /**
   * @example
   * CB1A380B-09F0-41BB-280B-72F8FD6DA2FE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
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

