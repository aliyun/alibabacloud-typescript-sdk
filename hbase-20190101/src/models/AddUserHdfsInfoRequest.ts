// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUserHdfsInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The cluster ID. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/144595.html) operation to obtain the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * hb-bp16o0pd5****582s
   */
  clusterId?: string;
  /**
   * @remarks
   * dfs.nameservices specifies the nameservices name of DFS. dfs.ha.namenodes specifies the DFS nodes, such as nn1 and nn2.
   * dfs.namenode.http-address.{dfs.nameservices}.nn1 specifies the port 50070 connection of HDFS nn1.
   * dfs.namenode.http-address.{dfs.nameservices}.nn2 specifies the port 50070 connection of HDFS nn2.
   * dfs.namenode.rpc-address.{dfs.nameservices}.nn1 specifies the port 8020 connection of HDFS nn1.
   * dfs.namenode.rpc-address.{dfs.nameservices}.nn2 specifies the port 8020 connection of HDFS nn2.
   * Port 50070 connections and port 8020 connections exist on each HDFS node. The number of port 50070 and port 8020 connection pairs equals the number of HDFS nodes.
   * 
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

