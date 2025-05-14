// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterResourcesResponseBodyDeleteBehavior extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete the resource by default when the cluster is deleted.
   * 
   * @example
   * false
   */
  deleteByDefault?: boolean;
  /**
   * @remarks
   * Specifies whether the default behavior returned in delete_by_default can be changed.
   * 
   * @example
   * false
   */
  changeable?: boolean;
  static names(): { [key: string]: string } {
    return {
      deleteByDefault: 'delete_by_default',
      changeable: 'changeable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteByDefault: 'boolean',
      changeable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

