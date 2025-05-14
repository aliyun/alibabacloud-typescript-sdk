// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLivePackageChannelGroupsResponseBodyLivePackageChannelGroups extends $dara.Model {
  /**
   * @remarks
   * The time when the channel group was created. It is in the `yyyy-MM-ddTHH:mm:ssZ` format and displayed in UTC.
   * 
   * @example
   * 2023-04-01T12:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The channel group description.
   */
  description?: string;
  /**
   * @remarks
   * The channel group name.
   * 
   * @example
   * testChannelGroup
   */
  groupName?: string;
  /**
   * @remarks
   * The time when the channel group was last modified. It is in the `yyyy-MM-ddTHH:mm:ssZ` format and displayed in UTC.
   * 
   * @example
   * 2023-04-02T12:00:00Z
   */
  lastModified?: string;
  /**
   * @remarks
   * The origin domain.
   * 
   * @example
   * origin.example.com
   */
  originDomain?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      groupName: 'GroupName',
      lastModified: 'LastModified',
      originDomain: 'OriginDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      groupName: 'string',
      lastModified: 'string',
      originDomain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

