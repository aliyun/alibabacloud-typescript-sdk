// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PAL7ConfigRewriteOp extends $dara.Model {
  /**
   * @remarks
   * HTTP header or query parameter name. Required.
   * 
   * @example
   * X-Test-Param
   */
  key?: string;
  /**
   * @remarks
   * Value to find and replace. Used only for the replace operation.
   * 
   * @example
   * old_value
   */
  oldValue?: string;
  /**
   * @remarks
   * Operation type. Required.
   * 
   * - **add**: Add an item.
   * 
   * - **set**: Set a value.
   * 
   * - **delete**: Delete an item.
   * 
   * - **replace**: Replace a value.
   * 
   * @example
   * add
   */
  op?: string;
  /**
   * @remarks
   * Target value as a string.
   * 
   * @example
   * new_value
   */
  value?: string;
  /**
   * @remarks
   * Target value as a string. Valid values:
   * 
   * - **sase_app_name**: Application name.
   * 
   * - **sase_app_id**: Application ID.
   * 
   * - **sase_policy_name**: Zero Trust policy name.
   * 
   * - **sase_user_username**: Username.
   * 
   * - **sase_user_department**: User department.
   * 
   * - **sase_user_group_infos**: User organizational structure information.
   * 
   * - **sase_user_matched_user_groups**: User group information.
   * 
   * - **sase_client_addr**: Client address.
   * 
   * - **sase_client_ip**: Client IP address.
   * 
   * - **sase_client_port**: Client port.
   * 
   * @example
   * sase_app_name
   */
  valueVariable?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      oldValue: 'OldValue',
      op: 'Op',
      value: 'Value',
      valueVariable: 'ValueVariable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      oldValue: 'string',
      op: 'string',
      value: 'string',
      valueVariable: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

