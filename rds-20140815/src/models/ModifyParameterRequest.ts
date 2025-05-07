// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyParameterRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to restart the instance for a new parameter value to take effect. Valid values:
   * 
   * *   **true**: The system forcefully restarts the instance. If a new parameter value takes effect only after the instance restarts, you must set this parameter to true. Otherwise, the new parameter value cannot take effect.
   * *   **false**: The system does not forcefully restart the instance.
   * 
   * Default value: **false**.
   * 
   * @example
   * false
   */
  forcerestart?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The parameter template ID.
   * 
   * > *   If you specify this parameter, you do not need to specify **Parameters**.
   * > *   If the parameter template can be applied only after the instance is restarted, you must specify **Forcerestart**.
   * 
   * @example
   * rpg-xxxxxxxxx
   */
  parameterGroupId?: string;
  /**
   * @remarks
   * The JSON strings of parameters and their values. All the parameter values are of the string type. Format: {"Parameter name 1":"Parameter value 1","Parameter name 2":"Parameter value 2"...}. You can call the DescribeParameterTemplates operation to query parameter names and values.
   * 
   * >  If you specify this parameter, you do not need to specify **ParameterGroupId**.
   * 
   * @example
   * {"delayed_insert_timeout":"600","max_length_for_sort_data":"2048"}
   */
  parameters?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The time at which the modification takes effect. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * > This time must be later than the time at which you call this operation.
   * 
   * @example
   * 2022-05-06T09:24:00Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The time at which the modification takes effect. Valid values:
   * 
   * - **Immediate**: immediately modifies the parameter. This is the default value.
   * - **MaintainTime**: modifies the parameter during the maintenance window of the instance. You can call the ModifyDBInstanceMaintainTime operation to change the maintenance window.
   * - **ScheduleTime**: modifies the parameter at the point in time that you specify. If you specify this value, you must also specify **SwitchTime**.
   * 
   * @example
   * ScheduleTime
   */
  switchTimeMode?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      forcerestart: 'Forcerestart',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      parameterGroupId: 'ParameterGroupId',
      parameters: 'Parameters',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      switchTime: 'SwitchTime',
      switchTimeMode: 'SwitchTimeMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBInstanceId: 'string',
      forcerestart: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      parameterGroupId: 'string',
      parameters: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      switchTime: 'string',
      switchTimeMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

