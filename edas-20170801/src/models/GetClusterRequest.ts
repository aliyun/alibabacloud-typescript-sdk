// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID. You can call the [ListCluster](https://help.aliyun.com/document_detail/154995.html) operation to obtain the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 5439271a-015b-433d-****-d76db49****
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

