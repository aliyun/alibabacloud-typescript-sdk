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

export class GetConversaionSpaceResponseBody extends $dara.Model {
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  space?: GetConversaionSpaceResponseBodySpace;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      space: 'space',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      space: GetConversaionSpaceResponseBodySpace,
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(this.space && typeof (this.space as any).validate === 'function') {
      (this.space as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

