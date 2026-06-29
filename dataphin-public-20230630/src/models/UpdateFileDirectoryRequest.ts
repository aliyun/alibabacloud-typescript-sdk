// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFileDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * The updated file folder after the move.
   * 
   * This parameter is required.
   * 
   * @example
   * /xx测试/目录new
   */
  directory?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12121111
   */
  fileId?: number;
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
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12132323
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      directory: 'Directory',
      fileId: 'FileId',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directory: 'string',
      fileId: 'number',
      opTenantId: 'number',
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

