// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAssociatedResourceRulesRequest extends $dara.Model {
  /**
   * @remarks
   * Number of data entries to display per page during pagination.
   * 
   * Default value: 50. Maximum value: 100.
   * 
   * @example
   * 50
   */
  maxResult?: number;
  /**
   * @remarks
   * Token for the next query start.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * Setting name of the associated resource tag rule.
   */
  settingName?: string[];
  /**
   * @remarks
   * Whether the associated resource tag rule is enabled. Values:
   * 
   * - Enable: Enabled.
   * - Disable: Disabled.
   * 
   * @example
   * Enable
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      maxResult: 'MaxResult',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      settingName: 'SettingName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResult: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      settingName: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.settingName)) {
      $dara.Model.validateArray(this.settingName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

