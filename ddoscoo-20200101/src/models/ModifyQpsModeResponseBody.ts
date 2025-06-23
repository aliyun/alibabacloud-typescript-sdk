// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyQpsModeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 48859E14-A9FB-4100-99FF-AAB75CA46776
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

