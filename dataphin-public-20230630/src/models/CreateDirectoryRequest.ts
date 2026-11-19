// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDirectoryRequestCreateCommand extends $dara.Model {
  /**
   * @remarks
   * The menu tree category. Valid values:
   * - tempCode: Ad hoc query.
   * - codeManage: Code task.
   * - offlinePipeline: Offline pipeline.
   * - offlinePipelineCustomPlugin: Custom pipeline component.
   * - dataX: Synchronization task.
   * - streamMeta: Real-time meta table.
   * - streamCustomDataSource: Real-time custom data source.
   * - streamTemplate: Real-time compute template.
   * - resourceManage: Resource management.
   * - udfResource: Offline function.
   * - streamFunction: Real-time function.
   * 
   * This parameter is required.
   * 
   * @example
   * tempCode
   */
  category?: string;
  /**
   * @remarks
   * The parent directory of the new directory.
   * 
   * This parameter is required.
   * 
   * @example
   * /
   */
  directory?: string;
  /**
   * @remarks
   * The name of the new directory.
   * 
   * This parameter is required.
   * 
   * @example
   * test_xx
   */
  name?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1212344
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      directory: 'Directory',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      directory: 'string',
      name: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * The create request.
   * 
   * This parameter is required.
   */
  createCommand?: CreateDirectoryRequestCreateCommand;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateDirectoryRequestCreateCommand,
      opTenantId: 'number',
      opUserId: 'string',
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

