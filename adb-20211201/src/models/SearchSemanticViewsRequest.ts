// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchSemanticViewsRequest extends $dara.Model {
  /**
   * @remarks
   * The ADB cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp*****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The text content to search.
   * 
   * @example
   * Sales revenue
   */
  queryText?: string;
  /**
   * @remarks
   * The number of most relevant documents to return.
   * 
   * @example
   * 3
   */
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      queryText: 'QueryText',
      topK: 'TopK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      queryText: 'string',
      topK: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

