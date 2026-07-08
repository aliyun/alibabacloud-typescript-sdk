// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAssociatedResourceRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Default Value: 50. Maximum Value: 100.
   * 
   * @example
   * 50
   */
  maxResult?: number;
  /**
   * @remarks
   * The token returned from a previous call to retrieve the next page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The Region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The names of the associated resource rules.
   */
  settingName?: string[];
  /**
   * @remarks
   * The status of the associated resource rules to query. Valid values:
   * 
   * - Enable: The rule is enabled.
   * 
   * - Disable: The rule is disabled.
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

