// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceRequestCreateCommand extends $dara.Model {
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
   * /
   */
  directory?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * udf_sleep.jar
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
   * JAR
   */
  resourceType?: string;
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
      directory: 'Directory',
      name: 'Name',
      projectId: 'ProjectId',
      resourceType: 'ResourceType',
      storageAddress: 'StorageAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      computeEngineType: 'string',
      description: 'string',
      directory: 'string',
      name: 'string',
      projectId: 'number',
      resourceType: 'string',
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

export class CreateResourceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  createCommand?: CreateResourceRequestCreateCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateResourceRequestCreateCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.createCommand && typeof (this.createCommand as any).validate === 'function') {
      (this.createCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

