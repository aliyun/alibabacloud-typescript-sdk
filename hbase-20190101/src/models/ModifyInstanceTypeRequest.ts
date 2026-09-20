// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of target instance. You can call [DescribeInstances](https://help.aliyun.com/document_detail/144595.html) to obtain target instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * hb-bp1x940uh********
   */
  clusterId?: string;
  /**
   * @remarks
   * The new node specifications of the core node. You can invoke [DescribeInstanceType](https://help.aliyun.com/document_detail/145796.html) to obtain the available node specifications.
   * 
   * > You must specify either the MasterInstanceType parameter or the CoreInstanceType parameter.
   * 
   * @example
   * hbase.sn1.8xlarge
   */
  coreInstanceType?: string;
  /**
   * @remarks
   * The new node specifications of the master node. You can invoke [DescribeInstanceType](https://help.aliyun.com/document_detail/145796.html) to obtain the available node specifications.
   * 
   * > You must specify either the MasterInstanceType parameter or the CoreInstanceType parameter.
   * 
   * @example
   * hbase.sn1.large
   */
  masterInstanceType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      coreInstanceType: 'CoreInstanceType',
      masterInstanceType: 'MasterInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      coreInstanceType: 'string',
      masterInstanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

