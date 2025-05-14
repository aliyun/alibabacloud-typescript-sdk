// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDriveSpaceResponseBody extends $dara.Model {
  createTime?: string;
  modifyTime?: string;
  permissionMode?: string;
  quota?: number;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  spaceId?: string;
  spaceName?: string;
  spaceType?: string;
  usedQuota?: number;
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
      createTime: 'createTime',
      modifyTime: 'modifyTime',
      permissionMode: 'permissionMode',
      quota: 'quota',
      requestId: 'requestId',
      spaceId: 'spaceId',
      spaceName: 'spaceName',
      spaceType: 'spaceType',
      usedQuota: 'usedQuota',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      modifyTime: 'string',
      permissionMode: 'string',
      quota: 'number',
      requestId: 'string',
      spaceId: 'string',
      spaceName: 'string',
      spaceType: 'string',
      usedQuota: 'number',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

