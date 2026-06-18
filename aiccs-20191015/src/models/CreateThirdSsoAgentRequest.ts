// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateThirdSsoAgentRequest extends $dara.Model {
  /**
   * @remarks
   * Account ID to synchronize.
   * 
   * This parameter is required.
   * 
   * @example
   * accountId1
   */
  accountId?: string;
  /**
   * @remarks
   * Account name to synchronize.
   * 
   * This parameter is required.
   * 
   * @example
   * accountName1
   */
  accountName?: string;
  /**
   * @remarks
   * The client ID issued to the tenant instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientId?: string;
  /**
   * @remarks
   * Unique ID for the customer request. Used for idempotency validation and can be generated using UUID.
   * 
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @remarks
   * Agent display name.
   * 
   * @example
   * 张三
   */
  displayName?: string;
  /**
   * @remarks
   * AICCS instance ID. You can obtain it from the Artificial Intelligence Cloud Call Service console.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre***
   */
  instanceId?: string;
  /**
   * @remarks
   * List of role IDs.
   */
  roleIds?: number[];
  /**
   * @remarks
   * List of skill group IDs.
   */
  skillGroupIds?: number[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      clientId: 'ClientId',
      clientToken: 'ClientToken',
      displayName: 'DisplayName',
      instanceId: 'InstanceId',
      roleIds: 'RoleIds',
      skillGroupIds: 'SkillGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      clientId: 'string',
      clientToken: 'string',
      displayName: 'string',
      instanceId: 'string',
      roleIds: { 'type': 'array', 'itemType': 'number' },
      skillGroupIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.roleIds)) {
      $dara.Model.validateArray(this.roleIds);
    }
    if(Array.isArray(this.skillGroupIds)) {
      $dara.Model.validateArray(this.skillGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

