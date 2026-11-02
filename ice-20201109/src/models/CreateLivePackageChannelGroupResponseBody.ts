// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLivePackageChannelGroupResponseBodyLivePackageChannelGroup extends $dara.Model {
  /**
   * @remarks
   * The time when the channel group was created. Format: yyyy-MM-ddTHH:mm:ssZ (UTC time).
   * 
   * @example
   * 2023-04-01T12:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the channel group.
   * 
   * @example
   * This is a sample description
   */
  description?: string;
  /**
   * @remarks
   * The name of the channel group.
   * 
   * @example
   * example-group
   */
  groupName?: string;
  /**
   * @remarks
   * The time when the channel group was created. Format: yyyy-MM-ddTHH:mm:ssZ (UTC time).
   * 
   * @example
   * 2023-04-01T12:00:00Z
   */
  lastModified?: string;
  /**
   * @remarks
   * The origin domain name.
   * 
   * @example
   * example.com
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

export class CreateLivePackageChannelGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The channel group.
   */
  livePackageChannelGroup?: CreateLivePackageChannelGroupResponseBodyLivePackageChannelGroup;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426614174000
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      livePackageChannelGroup: 'LivePackageChannelGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      livePackageChannelGroup: CreateLivePackageChannelGroupResponseBodyLivePackageChannelGroup,
      requestId: 'string',
    };
  }

  validate() {
    if(this.livePackageChannelGroup && typeof (this.livePackageChannelGroup as any).validate === 'function') {
      (this.livePackageChannelGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

