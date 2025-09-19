// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeCheckCustomConfigRequestCustomConfigs extends $dara.Model {
  /**
   * @remarks
   * The name of the custom configuration item. The name of a custom configuration item is unique in a check item.
   * 
   * @example
   * SessionTimeMax
   */
  name?: string;
  /**
   * @remarks
   * The operation that you want to perform on the custom configuration item. This parameter is required only if you want to delete the custom configuration item. To delete the custom configuration item, set the value to DELETE.
   * 
   * @example
   * DELETE
   */
  operation?: string;
  /**
   * @remarks
   * The value of the custom configuration item. The value is a string.
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
   * The ID of the fixing process.
   * 
   * @example
   * ascgrmscyjgs*********
   */
  flowId?: string;
  /**
   * @remarks
   * The name of the parameter required for fixing a risk item, which is unique in a check item.
   * 
   * @example
   * Port
   */
  name?: string;
  /**
   * @remarks
   * The operation that you want to perform on the custom configuration item. This parameter is required only if you want to delete the custom configuration item. To delete the custom configuration item, set the value to DELETE.
   * 
   * @example
   * DELETE
   */
  operation?: string;
  /**
   * @remarks
   * The value of the parameter required for fixing a risk item. The value is a string.
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
   * > You can call the [ListCheckResult](~~ListCheckResult~~) operation to query the IDs of check items.
   * 
   * @example
   * 76
   */
  checkId?: number;
  /**
   * @remarks
   * The custom configuration items of the check item.
   */
  customConfigs?: ChangeCheckCustomConfigRequestCustomConfigs[];
  /**
   * @remarks
   * The region where the Security Center instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: International
   * *   **ap-southeast-1**: Singapore
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The parameters required for fixing risk items.
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

