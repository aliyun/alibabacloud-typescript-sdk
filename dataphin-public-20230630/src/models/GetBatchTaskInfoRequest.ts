// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBatchTaskInfoRequest extends $dara.Model {
  /**
   * @example
   * dev
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12113111
   */
  fileId?: number;
  includeAllUpStreams?: boolean;
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
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      fileId: 'FileId',
      includeAllUpStreams: 'IncludeAllUpStreams',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      fileId: 'number',
      includeAllUpStreams: 'boolean',
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

