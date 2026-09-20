// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckComponentsVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/144595.html) operation to obtain the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * hb-t4naqsay5gn****
   */
  clusterId?: string;
  /**
   * @remarks
   * The component to check. Valid values:
   * 
   * - **HBASE**
   * - **HADOOP**
   * - **PHOENIX**
   * - **SOLR**
   * - **THRIFT**.
   * 
   * This parameter is required.
   * 
   * @example
   * HBASE,HADOOP
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

