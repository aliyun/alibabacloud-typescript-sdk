// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppInfoRequest extends $dara.Model {
  /**
   * @remarks
   * App ID。
   * 
   * @example
   * txt_check_agent_01
   */
  appId?: string;
  /**
   * @remarks
   * The app name.
   * 
   * @example
   * Custom text moderation
   */
  name?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * agent_text
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      name: 'Name',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      name: 'string',
      regionId: 'string',
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

