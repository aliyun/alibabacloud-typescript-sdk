// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyParameterRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to forcefully restart the database after the modification. Valid values:
   * * **true**: forcefully restarts the database. If any of the modified parameters require a restart to take effect, you must set this parameter to true. Otherwise, the modification does not take effect.
   * * **false**: does not forcefully restart the database.
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
   * > * If you specify this parameter, you do not need to specify **Parameters**.
   * > * If applying the parameter template requires a restart of the instance, you must specify **Forcerestart**.
   * 
   * @example
   * rpg-****
   */
  parameterGroupId?: string;
  /**
   * @remarks
   * The JSON string that consists of parameters and their values. All parameter values are of the string type. Format: {"Parameter name 1":"Parameter value 1","Parameter name 2":"Parameter value 2"...}. You can call the DescribeParameterTemplates operation to query parameter names and values.
   * >If you specify this parameter, you do not need to specify **ParameterGroupId**.
   * 
   * @example
   * {"delayed_insert_timeout":"600","max_length_for_sort_data":"2048"}
   */
  parameters?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The scheduled time for the modification to take effect. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * >The specified time must be later than the current time when you call this operation.
   * 
   * @example
   * 2022-05-06T09:24:00Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The time at which the modification takes effect. Valid values:
   * * **Immediate**: default value. The modification takes effect immediately.
   * * **MaintainTime**: The modification takes effect during the maintenance window of the instance. You can call the ModifyDBInstanceMaintainTime operation to modify the maintenance window.
   * * **ScheduleTime**: The modification takes effect at a manually specified time. If you set this parameter to ScheduleTime, you must also specify **SwitchTime**.
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

