// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKnowledgeRecallRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ADB MySQL cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp19aaaaaa****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The file path prefix. Only files that match the specified path prefix are recalled.
   * 
   * @example
   * oss://bucketName/path/prefix/
   */
  path?: string;
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
   * The list of tags in JSON format.
   * 
   * @example
   * {   "tag_key1": ["tag_key1_value1", "tag_key1_value2"],   "tag_key2": ["tag_key2_value"] }
   */
  tags?: string;
  /**
   * @remarks
   * The top K associated files to recall.
   * 
   * @example
   * 5
   */
  topk?: number;
  /**
   * @remarks
   * The username. Only files that the specified user has permission to access are recalled.
   * 
   * @example
   * user_name1
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      path: 'Path',
      question: 'Question',
      tags: 'Tags',
      topk: 'Topk',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      path: 'string',
      question: 'string',
      tags: 'string',
      topk: 'number',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

