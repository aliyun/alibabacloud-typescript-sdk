// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChatConfigurationRequest extends $dara.Model {
  /**
   * @example
   * {"BotName":"chatops"}
   */
  configuration?: string;
  /**
   * @example
   * chatops
   */
  name?: string;
  /**
   * @example
   * AliyunOOSDefaultRole
   */
  ramRole?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceGroupId?: string;
  /**
   * @example
   * DingTalk
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'Configuration',
      name: 'Name',
      ramRole: 'RamRole',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: 'string',
      name: 'string',
      ramRole: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
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

