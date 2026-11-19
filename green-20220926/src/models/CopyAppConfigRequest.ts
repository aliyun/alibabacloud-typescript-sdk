// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyAppConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the source app.
   * 
   * @example
   * txt_check_agent_01
   */
  appId?: string;
  /**
   * @remarks
   * The name of the new app.
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

