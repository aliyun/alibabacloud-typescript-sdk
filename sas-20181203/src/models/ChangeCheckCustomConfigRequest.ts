// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeCheckCustomConfigRequestCustomConfigs extends $dara.Model {
  /**
   * @remarks
   * The name of the custom configuration item, which is unique within the check item.
   * 
   * @example
   * SessionTimeMax
   */
  name?: string;
  /**
   * @remarks
   * The operation type of the custom configuration item. Set this parameter to DELETE only when deleting a configuration item. You do not need to specify this parameter for create or update operations.
   * 
   * @example
   * DELETE
   */
  operation?: string;
  /**
   * @remarks
   * The user-configured value string of the custom configuration item.
   * 
   * @example
   * 13
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      operation: 'Operation',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      operation: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeCheckCustomConfigRequestRepairConfigs extends $dara.Model {
  /**
   * @remarks
   * The ID of the repair flow used during the repair process.
   * 
   * @example
   * ascgrmscyjgs*********
   */
  flowId?: string;
  /**
   * @remarks
   * The name of the repair parameter, which is unique within the check item.
   * 
   * @example
   * Port
   */
  name?: string;
  /**
   * @remarks
   * The operation type of the custom configuration item. Set this parameter to DELETE only when deleting a configuration item. You do not need to specify this parameter for create or update operations.
   * 
   * @example
   * DELETE
   */
  operation?: string;
  /**
   * @remarks
   * The user-configured value string of the repair configuration item.
   * 
   * @example
   * 80
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      name: 'Name',
      operation: 'Operation',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      name: 'string',
      operation: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeCheckCustomConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * > You can call the [ListCheckResult](~~ListCheckResult~~) operation to obtain the check item ID.
   * 
   * @example
   * 76
   */
  checkId?: number;
  /**
   * @remarks
   * The list of custom configuration items for the check item.
   */
  customConfigs?: ChangeCheckCustomConfigRequestCustomConfigs[];
  /**
   * @remarks
   * The region of the Security Center instance. Valid values:
   * 
   * - **cn-hangzhou:** China
   * - **ap-southeast-1:** Singapore
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The repair parameters supported by the repair feature of the check item.
   */
  repairConfigs?: ChangeCheckCustomConfigRequestRepairConfigs[];
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      customConfigs: 'CustomConfigs',
      regionId: 'RegionId',
      repairConfigs: 'RepairConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'number',
      customConfigs: { 'type': 'array', 'itemType': ChangeCheckCustomConfigRequestCustomConfigs },
      regionId: 'string',
      repairConfigs: { 'type': 'array', 'itemType': ChangeCheckCustomConfigRequestRepairConfigs },
    };
  }

  validate() {
    if(Array.isArray(this.customConfigs)) {
      $dara.Model.validateArray(this.customConfigs);
    }
    if(Array.isArray(this.repairConfigs)) {
      $dara.Model.validateArray(this.repairConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

