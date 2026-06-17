// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarFsAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can find cluster IDs by calling the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation.
   * 
   * @example
   * pc-bp1q76364ird*****
   */
  DBClusterId?: string;
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
  /**
   * @remarks
   * Specifies whether to query the FUSE mount information. Valid values:
   * 
   * - **true**: Queries the FUSE mount information.
   * 
   * - **false**: Does not query the FUSE mount information. This is the default value.
   * 
   * @example
   * false
   */
  queryFuseMountInfo?: boolean;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      polarFsInstanceId: 'PolarFsInstanceId',
      queryFuseMountInfo: 'QueryFuseMountInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      polarFsInstanceId: 'string',
      queryFuseMountInfo: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

