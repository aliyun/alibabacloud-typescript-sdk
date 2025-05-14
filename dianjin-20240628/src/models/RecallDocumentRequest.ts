// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RecallDocumentRequestFilters } from "./RecallDocumentRequestFilters";


export class RecallDocumentRequest extends $dara.Model {
  filters?: RecallDocumentRequestFilters[];
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  /**
   * @example
   * false
   */
  rearrangement?: boolean;
  /**
   * @example
   * 10
   */
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      filters: 'filters',
      query: 'query',
      rearrangement: 'rearrangement',
      topK: 'topK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: { 'type': 'array', 'itemType': RecallDocumentRequestFilters },
      query: 'string',
      rearrangement: 'boolean',
      topK: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

