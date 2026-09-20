// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The instance specification name. For more information, see [Instance node specifications](https://help.aliyun.com/document_detail/194870.html).
   * > If InstanceType is left empty, all instance specifications are returned.
   * 
   * @example
   * hbase.n2.4xlarge
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

