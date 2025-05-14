// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLivePackageChannelGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The channel group description. It can be up to 1,000 characters in length.
   */
  description?: string;
  /**
   * @remarks
   * The channel group name. It can contain letters, digits, hyphens (-), and underscores (_). The name must be 1 to 200 characters in length. Format: [A-Za-z0-9_-]+
   * 
   * This parameter is required.
   * 
   * @example
   * channel-group-1
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

