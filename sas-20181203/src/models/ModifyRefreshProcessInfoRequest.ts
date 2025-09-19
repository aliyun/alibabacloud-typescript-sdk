// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRefreshProcessInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The UUID of the server.
   * 
   * > You can call the [DescribeCloudCenterInstances](https://help.aliyun.com/document_detail/141932.html) operation to query the UUIDs of servers.
   * 
   * @example
   * 0f3b8f76-90e5-4455-a5aa-23ce30b5****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

