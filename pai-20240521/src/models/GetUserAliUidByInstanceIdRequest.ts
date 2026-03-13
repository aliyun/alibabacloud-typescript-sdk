// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserAliUidByInstanceIdRequest extends $dara.Model {
  regionId?: string;
  /**
   * @example
   * PodId
   */
  resourceOwnerUid?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceOwnerUid: 'ResourceOwnerUid',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceOwnerUid: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

