// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PurgeInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the deleted cluster to be cleaned up. You can call the DescribeDeletedInstances operation to obtain the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * hb-m5ek15uzs7613xxxx
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

