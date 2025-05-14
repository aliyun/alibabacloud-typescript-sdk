// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationPlansRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c29ced64b3dfe4f33b57ca0aa9f68****
   */
  clusterId?: string;
  /**
   * @remarks
   * The operation plan type.
   * 
   * @example
   * cluster_upgrade
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

