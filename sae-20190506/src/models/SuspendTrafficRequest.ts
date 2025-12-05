// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SuspendTrafficRequest extends $dara.Model {
  /**
   * @example
   * d700e680-aa4d-4ec1-afc2-6566b5ff****
   */
  appId?: string;
  /**
   * @example
   * c-668727a8-17d86664-41e5bb******,c-668727a8-17d86664-7e4958******
   */
  instanceIds?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      instanceIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

