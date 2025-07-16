// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChatSessionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rmq-cn-9t946y43m1d
   */
  instanceId?: string;
  /**
   * @example
   * b9be4b25c2d38c409c376ffd2372be1
   */
  license?: string;
  /**
   * @example
   * Web | Android | iOS
   */
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      license: 'license',
      platform: 'platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      license: 'string',
      platform: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

