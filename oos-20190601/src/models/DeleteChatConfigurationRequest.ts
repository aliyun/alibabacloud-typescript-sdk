// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteChatConfigurationRequest extends $dara.Model {
  /**
   * @example
   * TestChatConfig-9be97b40
   */
  name?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

