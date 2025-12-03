// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUserHdfsInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-bp16o0pd52e3y****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hdfs_test
   */
  nameService?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      nameService: 'NameService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      nameService: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

