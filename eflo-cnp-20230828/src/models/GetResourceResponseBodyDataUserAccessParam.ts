// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceResponseBodyDataUserAccessParam extends $dara.Model {
  /**
   * @remarks
   * User ID
   * 
   * @example
   * dev
   */
  accessId?: string;
  /**
   * @remarks
   * User key
   * 
   * @example
   * test
   */
  accessKey?: string;
  /**
   * @remarks
   * Endpoint
   * 
   * @example
   * test
   */
  endpoint?: string;
  /**
   * @remarks
   * Workspace ID
   * 
   * @example
   * test
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

