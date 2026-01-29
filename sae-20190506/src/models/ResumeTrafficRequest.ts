// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResumeTrafficRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 017f39b8-dfa4-4e16-a84b-1dcee4b1****
   */
  appId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
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

