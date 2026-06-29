// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAdHocFileRequestCreateCommand extends $dara.Model {
  /**
   * @remarks
   * The file content.
   * 
   * This parameter is required.
   * 
   * @example
   * select 1;
   */
  content?: string;
  /**
   * @remarks
   * The directory where the file is located.
   * 
   * This parameter is required.
   * 
   * @example
   * /xx1/xx2/
   */
  directory?: string;
  /**
   * @remarks
   * The file name.
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
   * 11212133
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      directory: 'Directory',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
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

export class CreateAdHocFileRequest extends $dara.Model {
  /**
   * @remarks
   * The request for creating an ad hoc query file.
   * 
   * This parameter is required.
   */
  createCommand?: CreateAdHocFileRequestCreateCommand;
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
      createCommand: CreateAdHocFileRequestCreateCommand,
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

