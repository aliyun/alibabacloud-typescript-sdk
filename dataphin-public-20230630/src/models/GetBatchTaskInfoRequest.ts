// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBatchTaskInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The environment identifier. Valid values:
   * 
   * - dev
   * - prod
   * 
   * Default value: dev.
   * 
   * @example
   * dev
   */
  env?: string;
  /**
   * @remarks
   * The node ID in the directory tree.
   * 
   * This parameter is required.
   * 
   * @example
   * 12113111
   */
  fileId?: number;
  /**
   * @remarks
   * Specifies whether to include all upstream nodes, including invalid dependencies. Default value: false.
   */
  includeAllUpStreams?: boolean;
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
   * The ID of the project to which the node belongs.
   * 
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

