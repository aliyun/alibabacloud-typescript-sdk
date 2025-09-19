// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTagWithUuidRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the tag.
   * 
   * This parameter is required.
   * 
   * @example
   * InternetIp
   */
  tagName?: string;
  /**
   * @remarks
   * The UUIDs of the servers. Separate multiple UUIDs with commas (,).
   * 
   * > You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to query the UUIDs of servers.
   * 
   * @example
   * 71f5313e-4355-4c59-86d1-557dda7b****,71f5313e-4355-4c59-86d1-557dda7b****
   */
  uuidList?: string;
  static names(): { [key: string]: string } {
    return {
      tagName: 'TagName',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagName: 'string',
      uuidList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

