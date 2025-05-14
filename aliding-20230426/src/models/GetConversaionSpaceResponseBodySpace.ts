// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConversaionSpaceResponseBodySpace extends $dara.Model {
  /**
   * @example
   * ding1234xxxxx
   */
  corpId?: string;
  /**
   * @example
   * 2022-01-01T10:00:00Z
   */
  createTime?: string;
  /**
   * @example
   * 2022-01-01T10:00:00Z
   */
  modifiedTime?: string;
  /**
   * @example
   * 798xxxxx
   */
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      createTime: 'string',
      modifiedTime: 'string',
      spaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

