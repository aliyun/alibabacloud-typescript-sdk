// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationVariables4FailRequest extends $dara.Model {
  /**
   * @example
   * Q2P4O9YSOKCT35L9
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

