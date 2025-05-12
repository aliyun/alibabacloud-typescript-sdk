// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEventsAttentionRequest extends $dara.Model {
  mode?: number;
  range?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      mode: 'mode',
      range: 'range',
      uuid: 'uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'number',
      range: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

