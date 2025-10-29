// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLineageRelationshipRequest extends $dara.Model {
  /**
   * @remarks
   * The lineage ID. You can refer to the ListLineageRelationships operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 110xxxx:custom-table.xxxxx:maxcompute-table.project.test_big_lineage_080901:custom-sqlxx.00001
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

