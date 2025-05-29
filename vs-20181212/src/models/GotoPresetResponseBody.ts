// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GotoPresetResponseBody extends $dara.Model {
  /**
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * 30295DF1-1DC7-48BA-BE5A-D58E61EB2375
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

