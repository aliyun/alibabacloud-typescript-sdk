// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMultiZoneClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the multi-zone instance. You can call [DescribeInstances](https://help.aliyun.com/document_detail/144595.html) to obtain the list. The multi-zone instance has **DbType** set to hbaseue and **ModuleStackVersion** set to 2.0.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-t4nn71xa0yn****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

