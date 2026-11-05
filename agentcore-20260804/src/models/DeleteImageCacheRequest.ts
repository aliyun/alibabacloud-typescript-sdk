// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteImageCacheRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the service endpoint, which is determined by the selected regional endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the current workspace. The server verifies the account, region, and resource ownership. This parameter cannot be omitted or used to access other workspaces.
   * 
   * This parameter is required.
   * 
   * @example
   * ws-example
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'regionId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
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

