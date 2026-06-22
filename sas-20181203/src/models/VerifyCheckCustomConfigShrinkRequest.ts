// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyCheckCustomConfigShrinkRequestCustomConfigs extends $dara.Model {
  /**
   * @remarks
   * The name of the custom configuration item for the check item. The name is unique within the check item.
   * 
   * @example
   * IPList
   */
  name?: string;
  /**
   * @remarks
   * The operation type of the custom configuration item for the check item. Set this parameter to DELETE only for deletion operations. You do not need to specify this parameter for creation or update operations.
   * 
   * @example
   * DELETE
   */
  operation?: string;
  /**
   * @remarks
   * The user-configured value string of the custom configuration item for the check item.
   * 
   * @example
   * 10.12.4.XX
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

export class VerifyCheckCustomConfigShrinkRequestRepairConfigs extends $dara.Model {
  /**
   * @remarks
   * The ID of the repair flow that corresponds to the repair operation.
   * 
   * @example
   * 7fec0a3395b345c18f108ffc9fc0****
   */
  flowId?: string;
  /**
   * @remarks
   * The name of the repair parameter for the check item. The name is unique within the check item.
   * 
   * @example
   * IPLists
   */
  name?: string;
  /**
   * @remarks
   * The operation type of the custom configuration item for the check item. Set this parameter to DELETE only for deletion operations. You do not need to specify this parameter for creation or update operations.
   * 
   * @example
   * DELETE
   */
  operation?: string;
  /**
   * @remarks
   * The user-configured value string of the repair configuration item for the check item.
   * 
   * @example
   * 172.26.49.XX
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

export class VerifyCheckCustomConfigShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * @example
   * 76
   */
  checkId?: number;
  /**
   * @remarks
   * The input parameters for custom check item validation.
   */
  customCheckConfigShrink?: string;
  /**
   * @remarks
   * The list of custom parameter configuration items for the check item.
   */
  customConfigs?: VerifyCheckCustomConfigShrinkRequestCustomConfigs[];
  /**
   * @remarks
   * The repair parameters supported by the repair feature of the check item.
   */
  repairConfigs?: VerifyCheckCustomConfigShrinkRequestRepairConfigs[];
  /**
   * @remarks
   * The validation type for Threat Detection Service parameters. Valid values:
   * - **REPAIR_CONFIG**: repair and custom parameter validation (default).
   * - **CHECK_ITEM_CONFIG**: custom check item validation.
   * 
   * @example
   * REPAIR_CONFIG
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      customCheckConfigShrink: 'CustomCheckConfig',
      customConfigs: 'CustomConfigs',
      repairConfigs: 'RepairConfigs',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'number',
      customCheckConfigShrink: 'string',
      customConfigs: { 'type': 'array', 'itemType': VerifyCheckCustomConfigShrinkRequestCustomConfigs },
      repairConfigs: { 'type': 'array', 'itemType': VerifyCheckCustomConfigShrinkRequestRepairConfigs },
      type: 'string',
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

