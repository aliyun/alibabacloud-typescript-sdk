// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDirectoryRequestCreateCommand extends $dara.Model {
  /**
   * @remarks
   * The menu tree category. Valid values:
   * - tempCode: custom query
   * - codeManage: code node
   * - offlinePipeline: offline pipeline
   * - offlinePipelineCustomPlugin: pipeline custom component
   * - dataX: synchronization task
   * - streamMeta: real-time meta table
   * - streamCustomDataSource: real-time custom source
   * - streamTemplate: real-time compute template
   * - resourceManage: resource management
   * - udfResource: offline function
   * - streamFunction: real-time function.
   * 
   * This parameter is required.
   * 
   * @example
   * tempCode
   */
  category?: string;
  /**
   * @remarks
   * The parent directory of the new file directory.
   * 
   * This parameter is required.
   * 
   * @example
   * /
   */
  directory?: string;
  /**
   * @remarks
   * The name of the new file directory.
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
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateDirectoryRequestCreateCommand,
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

