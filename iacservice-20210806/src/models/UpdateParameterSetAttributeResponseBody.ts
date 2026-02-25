// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateParameterSetAttributeResponseBody extends $dara.Model {
  /**
   * @example
   * 81CF7E18-D318-5670-9A4D-C08476BC4899
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

