// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The app ID. Note: This parameter is actually required. If it is not provided, the service returns a 400 error (appId may not be empty).
   * 
   * @example
   * txt_check_agent_01
   */
  appId?: string;
  /**
   * @remarks
   * The custom order number.
   * 
   * @example
   * 1
   */
  customOrderNum?: number;
  /**
   * @remarks
   * The name of the app.
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
   * The resource type. Note: This parameter is actually required. If it is not provided, the service returns a 400 error (resourceType may not be empty).
   * 
   * @example
   * agent_text
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      customOrderNum: 'CustomOrderNum',
      name: 'Name',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      customOrderNum: 'number',
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

