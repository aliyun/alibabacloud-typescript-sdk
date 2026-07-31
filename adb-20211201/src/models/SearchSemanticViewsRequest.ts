// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchSemanticViewsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp*****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The search query.
   * 
   * @example
   * 销售额
   */
  queryText?: string;
  /**
   * @remarks
   * The number of the most relevant semantic views to return.
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

