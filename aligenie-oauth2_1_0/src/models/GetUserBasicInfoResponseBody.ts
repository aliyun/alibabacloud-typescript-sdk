// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetUserBasicInfoResponseBodyUnionIds } from "./GetUserBasicInfoResponseBodyUnionIds";


export class GetUserBasicInfoResponseBody extends $dara.Model {
  /**
   * @example
   * https://xxxxxx
   */
  avatarUrl?: string;
  /**
   * @example
   * xxxxxx
   */
  nickname?: string;
  /**
   * @example
   * 3hPPBd9YuhfJQCzZ/07AAWdoO3K8zCb/KAqW96zPHXPiFkzjB/JfcWuuFHQQDaGZ4wVbNMV6wYuj075p/rhVLg==
   */
  openId?: string;
  /**
   * @example
   * 4070039E-5822-1F32-9295-1D2883E48BA5
   */
  requestId?: string;
  unionIds?: GetUserBasicInfoResponseBodyUnionIds[];
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      nickname: 'Nickname',
      openId: 'OpenId',
      requestId: 'RequestId',
      unionIds: 'UnionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      nickname: 'string',
      openId: 'string',
      requestId: 'string',
      unionIds: { 'type': 'array', 'itemType': GetUserBasicInfoResponseBodyUnionIds },
    };
  }

  validate() {
    if(Array.isArray(this.unionIds)) {
      $dara.Model.validateArray(this.unionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

