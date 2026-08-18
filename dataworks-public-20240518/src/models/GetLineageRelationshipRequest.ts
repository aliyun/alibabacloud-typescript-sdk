// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLineageRelationshipRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the lineage relationship. You can obtain this value from the response of the ListLineageRelationships operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 4as3dasf654a
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

