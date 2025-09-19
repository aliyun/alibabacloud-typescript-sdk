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
   * The ID of the task that you want to roll back
   * 
   * @example
   * 7d0b10e35e80c9e5ebac5f1054****
   */
  taskId?: string;
  /**
   * @remarks
   * The service provider of the asset. Valid values:
   * 
   * *   **0**: an asset provided by Alibaba Cloud.
   * *   **1**: an asset outside Alibaba Cloud.
   * *   **2**: an asset in a data center.
   * *   **3**, **4**, **5**, and **7**: an asset from a third-party cloud service provider.
   * *   **8**: a lightweight asset.
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
   * The name of the temporary repair parameter.
   * 
   * @example
   * IPPort
   */
  name?: string;
  /**
   * @remarks
   * The value of the temporary repair parameter.
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
   * >  You can call the [ListCheckResult](~~ListCheckResult~~) operation to obtain the ID of the check item.
   * 
   * This parameter is required.
   * 
   * @example
   * 132
   */
  checkId?: number;
  /**
   * @remarks
   * The dimension of the task that you want to submit. Valid values:
   * 
   * *   Instance dimension: INSTANCE
   * *   Check item dimension: CHECK_ID
   * 
   * @example
   * CHECK_ID
   */
  dimensionType?: string;
  /**
   * @remarks
   * The asset information required to submit the tasks for instances.
   */
  operationTaskInstances?: SubmitOperationTaskRequestOperationTaskInstances[];
  /**
   * @remarks
   * The key linked to cross-page selections during task submission.
   * 
   * >  You can call the [CreateAssetSelectionConfig](~~CreateAssetSelectionConfig~~) operation to query the associated key from the BusinessType field.
   * 
   * @example
   * CSPM_OPERATION_RELATION_KEY_173***
   */
  relationKey?: string;
  /**
   * @remarks
   * The temporary parameters required for the repair task.
   */
  repairTempParam?: SubmitOperationTaskRequestRepairTempParam[];
  /**
   * @remarks
   * The type of the task that you want to submit. Valid values:
   * 
   * *   Repair task: REPAIR
   * *   Rollback task: ROLLBACK
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

