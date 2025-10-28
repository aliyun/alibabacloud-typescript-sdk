// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMigrateEcuListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * *   The ID of a custom namespace is in the `region ID:namespace identifier` format. Example: `cn-beijing:test`.
   * *   The ID of the default namespace is in the `region ID` format. Example: `cn-beijing`.
   * 
   * @example
   * cn-hangzhou or cn-hangzhou:test
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

