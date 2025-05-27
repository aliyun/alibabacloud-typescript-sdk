// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCardSmsTemplateReportResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the data returned.
   */
  model?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      model: 'model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.model)) {
      $dara.Model.validateArray(this.model);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

