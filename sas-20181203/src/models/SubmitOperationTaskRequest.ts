// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitOperationTaskRequestOperationTaskInstances extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the server.
   * 
   * @example
   * i-uf6533m4vuo3oa33****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the server.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The task ID to roll back when performing a rollback task.
   * 
   * @example
   * 7d0b10e35e80c9e5ebac5f1054****
   */
  taskId?: string;
  /**
   * @remarks
   * The asset vendor. Valid values:
   * 
   * - **0**: Alibaba Cloud asset
   * - **1**: asset outside the cloud
   * - **2**: IDC asset
   * - **3**, **4**, **5**, **7**: asset from another cloud provider
   * - **8**: lightweight asset
   * 
   * @example
   * 7
   */
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      taskId: 'TaskId',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      taskId: 'string',
      vendor: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitOperationTaskRequestRepairTempParam extends $dara.Model {
  /**
   * @remarks
   * The name of the temporary remediation parameter.
   * 
   * @example
   * IPPort
   */
  name?: string;
  /**
   * @remarks
   * The value of the temporary remediation parameter.
   * 
   * @example
   * 192.168.1XX.1XX
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class SubmitOperationTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * > Call the [ListCheckResult](~~ListCheckResult~~) operation to obtain the check item ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 132
   */
  checkId?: number;
  /**
   * @remarks
   * The task dimension for the submitted operation task. Valid values:
   * - INSTANCE: instance dimension
   * - CHECK_ID: check item dimension
   * 
   * @example
   * CHECK_ID
   */
  dimensionType?: string;
  /**
   * @remarks
   * The asset information required to submit instance tasks.
   */
  operationTaskInstances?: SubmitOperationTaskRequestOperationTaskInstances[];
  /**
   * @remarks
   * The relation key associated with cross-page selection when submitting the operation.
   * > Call the [CreateAssetSelectionConfig](~~CreateAssetSelectionConfig~~) operation and use the BusinessType field to obtain the relation key.
   * 
   * @example
   * CSPM_OPERATION_RELATION_KEY_173***
   */
  relationKey?: string;
  /**
   * @remarks
   * The temporary parameters required for the remediation task.
   */
  repairTempParam?: SubmitOperationTaskRequestRepairTempParam[];
  /**
   * @remarks
   * The task type for the submitted task. Valid values:
   * - REPAIR: remediation task
   * - ROLLBACK: rollback task
   * 
   * This parameter is required.
   * 
   * @example
   * REPAIR
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      dimensionType: 'DimensionType',
      operationTaskInstances: 'OperationTaskInstances',
      relationKey: 'RelationKey',
      repairTempParam: 'RepairTempParam',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'number',
      dimensionType: 'string',
      operationTaskInstances: { 'type': 'array', 'itemType': SubmitOperationTaskRequestOperationTaskInstances },
      relationKey: 'string',
      repairTempParam: { 'type': 'array', 'itemType': SubmitOperationTaskRequestRepairTempParam },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.operationTaskInstances)) {
      $dara.Model.validateArray(this.operationTaskInstances);
    }
    if(Array.isArray(this.repairTempParam)) {
      $dara.Model.validateArray(this.repairTempParam);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

