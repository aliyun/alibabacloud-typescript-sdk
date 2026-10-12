// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataSourceSharedRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data source sharing rule. You can call the ListDataSourceSharedRules operation to query existing sharing rules and their IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 22127
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

