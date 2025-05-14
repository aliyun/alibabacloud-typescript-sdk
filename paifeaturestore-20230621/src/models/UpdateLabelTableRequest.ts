// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateLabelTableRequestFields } from "./UpdateLabelTableRequestFields";


export class UpdateLabelTableRequest extends $dara.Model {
  /**
   * @example
   * 3
   */
  datasourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fields?: UpdateLabelTableRequestFields[];
  /**
   * @example
   * rec_test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      datasourceId: 'DatasourceId',
      fields: 'Fields',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasourceId: 'string',
      fields: { 'type': 'array', 'itemType': UpdateLabelTableRequestFields },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

