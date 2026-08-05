// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The name.
   * 
   * @example
   * CustomReview
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
  /**
   * @remarks
   * The system app ID.
   * 
   * @example
   * txt_check_agent
   */
  sysAppId?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * plus
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      sysAppId: 'SysAppId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      regionId: 'string',
      resourceType: 'string',
      sysAppId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

