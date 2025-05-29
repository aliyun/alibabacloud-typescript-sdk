// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePresetResponseBody extends $dara.Model {
  /**
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * F18FD685-B194-4489-9609-F80A9490A258
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

