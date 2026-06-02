// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteContactBlockListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c6320d3c-fa45-4011-b3b1-acdfabe3a8c6
   */
  contactBlockListId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c6320d3c-fa45-4011-b3b1-acdfabe3a8c6
   */
  instanceId?: string;
  /**
   * @example
   * 160131
   */
  operator?: string;
  static names(): { [key: string]: string } {
    return {
      contactBlockListId: 'ContactBlockListId',
      instanceId: 'InstanceId',
      operator: 'Operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactBlockListId: 'string',
      instanceId: 'string',
      operator: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

