// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEcuByRegionRequest extends $dara.Model {
  /**
   * @remarks
   * Set the value to `pop-query`.
   * 
   * This parameter is required.
   * 
   * @example
   * pop-query
   */
  act?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * *   The ID of a custom namespace is in the `region ID:namespace identifier` format. Example: cn-beijing:tdy218.
   * *   The ID of the default namespace is in the `region ID` format. Example: cn-beijing.
   * 
   * @example
   * cn-beijing or cn-beijing:tdy218
   */
  logicalRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      act: 'Act',
      logicalRegionId: 'LogicalRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      act: 'string',
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

