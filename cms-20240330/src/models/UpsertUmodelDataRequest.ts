// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpsertUmodelDataRequest extends $dara.Model {
  elements?: any[];
  /**
   * @example
   * Upsert
   */
  method?: string;
  static names(): { [key: string]: string } {
    return {
      elements: 'elements',
      method: 'method',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': 'any' },
      method: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.elements)) {
      $dara.Model.validateArray(this.elements);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

