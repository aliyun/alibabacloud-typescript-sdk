// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUserHdfsInfoRequest extends $dara.Model {
  /**
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hb-bp16o0pd5****582s
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"dfs.nameservices":"hdfs_test","dfs.ha.namenodes":"nn1,nn2","dfs.namenode.http-address.hdfs_test.nn1":"TEST-xxx1.com:50070","dfs.namenode.http-address.hdfs_test.nn2":"TEST-xxx2.com:50070","dfs.namenode.rpc-address.hdfs_test.nn1":"TEST-xxx1.com:8020","dfs.namenode.rpc-address.hdfs_test.nn2":"TEST-xxx2.com:8020"}
   */
  extInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      clusterId: 'ClusterId',
      extInfo: 'ExtInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      clusterId: 'string',
      extInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

