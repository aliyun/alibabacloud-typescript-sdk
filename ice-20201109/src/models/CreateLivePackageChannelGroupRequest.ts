// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLivePackageChannelGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency parameter.
   * 
   * @example
   * ****12e8864746a0a398****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the channel group. The description can be up to 1,000 characters in length.
   * 
   * @example
   * This is a sample description
   */
  description?: string;
  /**
   * @remarks
   * The name of the channel group. The name must be 1 to 200 characters in length, and can contain only uppercase and lowercase letters, digits, hyphens, and underscores. Format: [A-Za-z0-9_-]+.
   * 
   * This parameter is required.
   * 
   * @example
   * channel-group-01
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
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

