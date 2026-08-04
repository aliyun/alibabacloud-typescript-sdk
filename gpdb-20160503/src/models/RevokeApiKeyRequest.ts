// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeApiKeyRequest extends $dara.Model {
  /**
   * @remarks
   * API KEY ID。
   * 
   * This parameter is required.
   * 
   * @example
   * api-xxxxxx
   */
  keyId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The list of service IDs to be authorized.
   * 
   * This parameter is required.
   */
  serviceIds?: string[];
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ws-*****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      regionId: 'RegionId',
      serviceIds: 'ServiceIds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      regionId: 'string',
      serviceIds: { 'type': 'array', 'itemType': 'string' },
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.serviceIds)) {
      $dara.Model.validateArray(this.serviceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

