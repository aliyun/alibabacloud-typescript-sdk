// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelPolarFsFileQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The file paths for which the quotas were deleted. Multiple paths are separated by a comma (`,`).
   * 
   * @example
   * /path1,/path2
   */
  filePathIds?: string;
  /**
   * @remarks
   * The ID of the Polarlakebase instance.
   * 
   * @example
   * pfs-2ze0i74ka607*****
   */
  polarFsInstanceId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2FED790E-FB61-4721-8C1C-07C627******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      filePathIds: 'FilePathIds',
      polarFsInstanceId: 'PolarFsInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePathIds: 'string',
      polarFsInstanceId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

