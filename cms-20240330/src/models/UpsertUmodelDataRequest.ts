// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpsertUmodelDataRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the elements.
   */
  elements?: any[];
  /**
   * @remarks
   * Specifies whether to perform a dry run for this request. Valid values:
   * - true: sends a check request without performing actual changes.
   * - false: sends a normal request.
   * Default value: false.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The method.
   * 
   * @example
   * Upsert
   */
  method?: string;
  static names(): { [key: string]: string } {
    return {
      elements: 'elements',
      dryRun: 'dryRun',
      method: 'method',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': 'any' },
      dryRun: 'boolean',
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

