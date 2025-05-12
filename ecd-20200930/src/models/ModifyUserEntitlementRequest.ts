// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyUserEntitlementRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud computers to which you want to add end users.
   */
  authorizeDesktopId?: string[];
  /**
   * @remarks
   * The ID of the users.
   */
  endUserId?: string[];
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of the cloud computers whose end users you want to remove.
   */
  revokeDesktopId?: string[];
  static names(): { [key: string]: string } {
    return {
      authorizeDesktopId: 'AuthorizeDesktopId',
      endUserId: 'EndUserId',
      regionId: 'RegionId',
      revokeDesktopId: 'RevokeDesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizeDesktopId: { 'type': 'array', 'itemType': 'string' },
      endUserId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      revokeDesktopId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.authorizeDesktopId)) {
      $dara.Model.validateArray(this.authorizeDesktopId);
    }
    if(Array.isArray(this.endUserId)) {
      $dara.Model.validateArray(this.endUserId);
    }
    if(Array.isArray(this.revokeDesktopId)) {
      $dara.Model.validateArray(this.revokeDesktopId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

