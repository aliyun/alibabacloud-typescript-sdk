// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteReservedNodePoolRequest extends $dara.Model {
  /**
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @example
   * rnp-cdx****
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

