// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMigrateRegionListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * cn-hangzhou:test
   */
  logicalRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      logicalRegionId: 'LogicalRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicalRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

