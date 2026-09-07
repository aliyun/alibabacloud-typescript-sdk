// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyUserEntitlementRequest extends $dara.Model {
  /**
   * @remarks
   * The list of cloud computer IDs for which to add authorized users.
   */
  authorizeDesktopId?: string[];
  /**
   * @remarks
   * The list of user IDs (usernames).
   */
  endUserId?: string[];
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of cloud computer IDs for which to remove authorized users.
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

