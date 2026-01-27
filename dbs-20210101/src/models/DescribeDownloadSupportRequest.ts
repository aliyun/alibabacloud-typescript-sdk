// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDownloadSupportRequest extends $dara.Model {
  /**
   * @example
   * dds-example
   */
  clusterName?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp1a48p922r4b****
   */
  instanceName?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides. You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/26231.html) operation to query the region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionCode?: string;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
      instanceName: 'InstanceName',
      regionCode: 'RegionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      instanceName: 'string',
      regionCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

