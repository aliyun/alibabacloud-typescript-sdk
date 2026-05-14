// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteModelResourceRequest extends $dara.Model {
  /**
   * @example
   * hologram_aicombo_public_cn-yi34cxxxx
   */
  aiInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      aiInstanceId: 'aiInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

