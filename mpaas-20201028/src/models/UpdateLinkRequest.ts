// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLinkRequest extends $dara.Model {
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
   * true
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
   * https://xxx/8hGb9SyJARqp7V4PGP92X
   */
  url?: string;
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
      url: 'Url',
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
      url: 'string',
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

