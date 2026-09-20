// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of target instance. You can call [DescribeInstances](https://help.aliyun.com/document_detail/144595.html) to obtain target instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-bp150tns0sjxs****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the component in the target instance. Valid values:
   * 
   * - **HBASE**
   * - **HADOOP**
   * - **PHOENIX**
   * - **SOLR**
   * - **THRIFT**
   * 
   * @example
   * THRIFT
   */
  components?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      components: 'Components',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      components: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

