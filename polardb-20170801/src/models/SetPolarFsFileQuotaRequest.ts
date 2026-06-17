// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetPolarFsFileQuotaRequestFilePathQuotas extends $dara.Model {
  /**
   * @remarks
   * The capacity quota in GB.
   * 
   * @example
   * 100
   */
  capacity?: number;
  /**
   * @remarks
   * The absolute path of the directory.
   * 
   * @example
   * /a/project
   */
  filePathId?: string;
  /**
   * @remarks
   * The inode quota.
   * 
   * @example
   * 100
   */
  inodes?: number;
  /**
   * @remarks
   * The maximum depth of subdirectories to traverse under the path specified by `FilePathId`. A value of 1 traverses only the first level of subdirectories. A value of 0 traverses to the deepest level.
   * 
   * @example
   * 1
   */
  maxDepth?: number;
  /**
   * @remarks
   * A list of file quota rule IDs, separated by a comma (`,`).
   * 
   * @example
   * 1,2
   */
  quotaIds?: string;
  /**
   * @remarks
   * Specifies how to apply the rule to existing files. Valid values:
   * 
   * - **missing**: Applies the rule only if one does not already exist. (Default)
   * 
   * - **all**: Applies the rule to all files.
   * 
   * @example
   * missing
   */
  strategy?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      filePathId: 'FilePathId',
      inodes: 'Inodes',
      maxDepth: 'MaxDepth',
      quotaIds: 'QuotaIds',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      filePathId: 'string',
      inodes: 'number',
      maxDepth: 'number',
      quotaIds: 'string',
      strategy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPolarFsFileQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * An array of objects defining the file quota rules for specific directories.
   * 
   * This parameter is required.
   */
  filePathQuotas?: SetPolarFsFileQuotaRequestFilePathQuotas[];
  /**
   * @remarks
   * The ID of the PolarFS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pfs-2ze0i74ka607*****
   */
  polarFsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      filePathQuotas: 'FilePathQuotas',
      polarFsInstanceId: 'PolarFsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      filePathQuotas: { 'type': 'array', 'itemType': SetPolarFsFileQuotaRequestFilePathQuotas },
      polarFsInstanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filePathQuotas)) {
      $dara.Model.validateArray(this.filePathQuotas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

