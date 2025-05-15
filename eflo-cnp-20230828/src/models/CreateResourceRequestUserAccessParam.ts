// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceRequestUserAccessParam extends $dara.Model {
  /**
   * @remarks
   * User ID
   * 
   * This parameter is required.
   * 
   * @example
   * dev
   */
  accessId?: string;
  /**
   * @remarks
   * User Key
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  accessKey?: string;
  /**
   * @remarks
   * Endpoint
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  endpoint?: string;
  /**
   * @remarks
   * Workspace ID
   * 
   * This parameter is required.
   * 
   * @example
   * 1245688643
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      accessKey: 'AccessKey',
      endpoint: 'Endpoint',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      accessKey: 'string',
      endpoint: 'string',
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

