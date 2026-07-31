// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKnowledgeRecallRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp19aaaaaa****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The question for knowledge base recall.
   * 
   * This parameter is required.
   * 
   * @example
   * What are the reports for the clothing category this month?
   */
  question?: string;
  /**
   * @remarks
   * The top K number of related files to recall.
   * 
   * @example
   * 5
   */
  topk?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      question: 'Question',
      topk: 'Topk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      question: 'string',
      topk: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

