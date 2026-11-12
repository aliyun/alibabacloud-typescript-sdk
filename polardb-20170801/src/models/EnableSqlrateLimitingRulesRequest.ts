// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableSQLRateLimitingRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID. Notes on invoking: The SQL throttling feature is supported only for clusters that have the database proxy enabled. Currently, the Oracle-compatible engine is verified to support this feature. For MySQL clusters, confirm whether the database proxy and the SQL throttling feature are enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-*****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable or disable the specified SQL throttling rules. Valid values:
   * 
   * - **true**: enables the rules.
   * - **false**: disables the rules.
   * 
   * > This parameter takes effect only when **RuleNameList** is specified.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enable?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The names of the SQL throttling rules to enable or disable. You can specify multiple rule names for batch operations. Separate multiple names with commas (,).
   * 
   * > You can view all SQL throttling rule information, including rule names, on the **SQL Firewall** tab of the **Security Management** page in the cluster console.
   * 
   * This parameter is required.
   * 
   * @example
   * testrule
   */
  ruleNameList?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      enable: 'Enable',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ruleNameList: 'RuleNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      enable: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ruleNameList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

