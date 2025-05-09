// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodeDependenciesResponseBodyPagingInfoNodesInputsTables extends $dara.Model {
  /**
   * @remarks
   * The table ID.
   * 
   * @example
   * odps.autotest.test_output_table_1
   */
  guid?: string;
  static names(): { [key: string]: string } {
    return {
      guid: 'Guid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      guid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

