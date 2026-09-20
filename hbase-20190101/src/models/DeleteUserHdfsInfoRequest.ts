// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUserHdfsInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * hb-bp16o0pd52e3y****
   */
  clusterId?: string;
  /**
   * @remarks
   * The value of dfs.nameservices in addUserHdfsInfo. This value is returned when you call the [QueryXpackRelateDB](https://help.aliyun.com/document_detail/144509.html) operation with relateDB set to hdfs.
   * 
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

