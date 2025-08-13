// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelSampleDownloadRequest extends $dara.Model {
  /**
   * @remarks
   * Region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  static names(): { [key: string]: string } {
    return {
      regId: 'RegId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

