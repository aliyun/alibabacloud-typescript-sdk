// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachGroupPluginResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 3707E6FA-749C-5352-B72A-ABE95D9DEA49
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

