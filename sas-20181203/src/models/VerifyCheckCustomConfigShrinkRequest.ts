// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyCheckCustomConfigShrinkRequestCustomConfigs extends $dara.Model {
  /**
   * @remarks
   * Name of the custom configuration item for the check item, unique within the same check item.
   * 
   * @example
   * IPList
   */
  name?: string;
  /**
   * @remarks
   * Operation type for the custom configuration item of the check item. Only pass DELETE when deleting; no need to pass for creation or update.
   * 
   * @example
   * DELETE
   */
  operation?: string;
  /**
   * @remarks
   * User-configured value string for the custom configuration item of the check item.
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
   * ID of the repair process during the repair.
   * 
   * @example
   * 7fec0a3395b345c18f108ffc9fc0****
   */
  flowId?: string;
  /**
   * @remarks
   * Name of the repair parameter for the check item, unique within the same check item.
   * 
   * @example
   * IPLists
   */
  name?: string;
  /**
   * @remarks
   * Operation type for the custom configuration item of the check item. Only pass DELETE when deleting; no need to pass for creation or update.
   * 
   * @example
   * DELETE
   */
  operation?: string;
  /**
   * @remarks
   * User-configured value string for the repair parameter of the check item.
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
   * Check item ID.
   * 
   * @example
   * 76
   */
  checkId?: number;
  /**
   * @remarks
   * Custom check item to validate input parameters.
   */
  customCheckConfigShrink?: string;
  /**
   * @remarks
   * List of custom configuration items for the check item.
   */
  customConfigs?: VerifyCheckCustomConfigShrinkRequestCustomConfigs[];
  /**
   * @remarks
   * Repair parameters supported by the check item\\"s repair function.
   */
  repairConfigs?: VerifyCheckCustomConfigShrinkRequestRepairConfigs[];
  /**
   * @remarks
   * Situation Awareness parameter validation types: 
   * - **REPAIR_CONFIG**: Repair and custom parameter validation (default) 
   * - **CHECK_ITEM_CONFIG**: Custom check item validation
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

