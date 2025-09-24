// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPermissionListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the relationship. Set this parameter to the value of the RelationId response parameter returned by calling the QueryRelationList operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 51463
   */
  relationId?: number;
  static names(): { [key: string]: string } {
    return {
      relationId: 'RelationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relationId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

