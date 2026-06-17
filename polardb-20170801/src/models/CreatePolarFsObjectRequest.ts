// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolarFsObjectRequest extends $dara.Model {
  /**
   * @remarks
   * The absolute path of the directory to create.
   * 
   * This parameter is required.
   * 
   * @example
   * /test
   */
  path?: string;
  /**
   * @remarks
   * The PolarFS instance id.
   * 
   * This parameter is required.
   * 
   * @example
   * pfs-2ze0i7*****
   */
  polarFsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      polarFsInstanceId: 'PolarFsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
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

