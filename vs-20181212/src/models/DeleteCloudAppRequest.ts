// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCloudAppRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cap-b06b26edfhytbn b94a75ae1a79efc90eb
   */
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

