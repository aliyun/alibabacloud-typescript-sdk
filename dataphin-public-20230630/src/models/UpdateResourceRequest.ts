// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateResourceRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xx 测试
   */
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MAX_COMPUTE
   */
  computeEngineType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xx 测试
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10112101
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 711833
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 300011448/711833/cdcd1c44-f1ee-46bb-b318-1d123dbabf6c
   */
  storageAddress?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      computeEngineType: 'ComputeEngineType',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      projectId: 'ProjectId',
      storageAddress: 'StorageAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      computeEngineType: 'string',
      description: 'string',
      id: 'number',
      name: 'string',
      projectId: 'number',
      storageAddress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  updateCommand?: UpdateResourceRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommand: UpdateResourceRequestUpdateCommand,
    };
  }

  validate() {
    if(this.updateCommand && typeof (this.updateCommand as any).validate === 'function') {
      (this.updateCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

