// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelPolarFsFileQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB cluster that the application depends on.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The file paths. Separate multiple paths with a comma (`,`).
   * 
   * This parameter is required.
   * 
   * @example
   * /path1,/path2
   */
  filePathIds?: string;
  /**
   * @remarks
   * The ID of the Polarlakebase instance.
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
      filePathIds: 'FilePathIds',
      polarFsInstanceId: 'PolarFsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      filePathIds: 'string',
      polarFsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

