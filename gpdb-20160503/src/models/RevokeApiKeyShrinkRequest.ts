// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeApiKeyShrinkRequest extends $dara.Model {
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
  serviceIdsShrink?: string;
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
      serviceIdsShrink: 'ServiceIds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      regionId: 'string',
      serviceIdsShrink: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

