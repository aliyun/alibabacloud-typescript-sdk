// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BB5953C300957
   */
  appId?: string;
  /**
   * @example
   * false
   */
  cors?: boolean;
  /**
   * @example
   * x519.cn
   */
  domain?: string;
  /**
   * @example
   * txt
   */
  dynamicfield?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://********
   */
  targetUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * default
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cors: 'Cors',
      domain: 'Domain',
      dynamicfield: 'Dynamicfield',
      targetUrl: 'TargetUrl',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      cors: 'boolean',
      domain: 'string',
      dynamicfield: 'string',
      targetUrl: 'string',
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

