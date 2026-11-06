// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPolarFsRequest extends $dara.Model {
  /**
   * @remarks
   * The custom OSS AccessKey ID. You must specify this parameter together with CustomOssSk when you call the ModifyPolarFs operation. Otherwise, the InvalidCustomIdentityInfo.Malformed (400) error is returned.
   * 
   * @example
   * LTAI5tExample1234
   */
  customOssAk?: string;
  /**
   * @remarks
   * The custom OSS AccessKey Secret. You must specify this parameter together with CustomOssAk when you call the ModifyPolarFs operation. Otherwise, the InvalidCustomIdentityInfo.Malformed (400) error is returned.
   * 
   * @example
   * example-oss-secret
   */
  customOssSk?: string;
  /**
   * @remarks
   * The cluster ID.
   * >You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query information about all clusters in the specified region, including cluster IDs.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The PolarFs instance ID.
   * 
   * @example
   * pfs-2ze0i74ka607*****
   */
  polarFsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      customOssAk: 'CustomOssAk',
      customOssSk: 'CustomOssSk',
      DBClusterId: 'DBClusterId',
      polarFsInstanceId: 'PolarFsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customOssAk: 'string',
      customOssSk: 'string',
      DBClusterId: 'string',
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

