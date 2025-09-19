// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageInfoListRequest extends $dara.Model {
  /**
   * @remarks
   * The UUID of the server. Separate multiple UUIDs with commas (,).
   * 
   * > You can call the [DescribeCloudCenterInstances](https://help.aliyun.com/document_detail/141932.html) operation to query the UUIDs of servers.
   * 
   * This parameter is required.
   * 
   * @example
   * 391abd09184cbd3743d7f5ec125d****,
   * e6aeb2a5b6004479398b0bcd1160****
   */
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuids: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

