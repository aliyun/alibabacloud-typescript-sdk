// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteClusterNodepoolRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to force delete the node pool.
   * 
   * - true: Force deletes the node pool. If the node pool contains existing instances, the existing nodes are forcibly deleted.
   * 
   * - false: Does not force delete the node pool. If the node pool contains existing instances, the node pool cannot be deleted, and an error is returned.
   * 
   * @example
   * false
   */
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      force: 'force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

