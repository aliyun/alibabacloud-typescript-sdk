// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSparkAppInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * > You can call the [ListSparkApps](https://help.aliyun.com/document_detail/455888.html) operation to query the ID of the Spark application.
   * 
   * This parameter is required.
   * 
   * @example
   * s202205201533hz1209892000****
   */
  appId?: string;
  /**
   * @remarks
   * <props="china">The ID of the Enterprise Edition, Basic Edition, or Data Lakehouse Edition cluster.
   * <props="intl">The ID of the Data Lakehouse Edition cluster.
   * 
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/612397.html) operation to query the cluster ID.
   * 
   * @example
   * am-bp11q28kvl688****
   */
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      DBClusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

