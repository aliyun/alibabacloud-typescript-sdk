// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVodPackagingGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The packaging group description.
   * 
   * @example
   * vod hls packaging
   */
  description?: string;
  /**
   * @remarks
   * The name of the packaging group. The name must be unique in an account and can be up to 128 characters in length. Letters, digits, underscores (_), and hyphens (-) are supported.
   * 
   * @example
   * vod_hls
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

