// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterNamesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The description of the cluster.
   * 
   * @example
   * ha3_test
   */
  description?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * 25030
   */
  id?: number;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * my_index
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      id: 'id',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

