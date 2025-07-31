// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBatchTaskInfoByVersionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12113111
   */
  fileId?: number;
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
   * 
   * @example
   * 131211211
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  versionId?: number;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      opTenantId: 'number',
      projectId: 'number',
      versionId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

