// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryHotlineInQueueRequest extends $dara.Model {
  /**
   * @remarks
   * The external skill group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  outerGroupId?: string;
  /**
   * @remarks
   * The external skill group type.
   * 
   * This parameter is required.
   * 
   * @example
   * mybank
   */
  outerGroupType?: string;
  static names(): { [key: string]: string } {
    return {
      outerGroupId: 'OuterGroupId',
      outerGroupType: 'OuterGroupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outerGroupId: 'string',
      outerGroupType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

