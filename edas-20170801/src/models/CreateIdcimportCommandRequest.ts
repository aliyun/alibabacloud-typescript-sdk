// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIDCImportCommandRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID. You can call the ListCluster operation to query the cluster ID. For more information, see [ListCluster](https://help.aliyun.com/document_detail/154995.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 7246cxxx-53xx-xxxx-xxxx-xxxxxxxx
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

