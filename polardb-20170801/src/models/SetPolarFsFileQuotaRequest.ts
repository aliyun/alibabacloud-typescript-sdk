// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetPolarFsFileQuotaRequestFilePathQuotas extends $dara.Model {
  /**
   * @example
   * /a/project
   */
  filePathId?: string;
  /**
   * @example
   * 1
   */
  maxDepth?: number;
  /**
   * @example
   * 1,2
   */
  quotaIds?: string;
  /**
   * @example
   * missing
   */
  strategy?: string;
  static names(): { [key: string]: string } {
    return {
      filePathId: 'FilePathId',
      maxDepth: 'MaxDepth',
      quotaIds: 'QuotaIds',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePathId: 'string',
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
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  filePathQuotas?: SetPolarFsFileQuotaRequestFilePathQuotas[];
  /**
   * @remarks
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

