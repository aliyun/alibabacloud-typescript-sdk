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
   * The array of images to search for image retrieval. Currently, only one image is supported. The image must be Base64-encoded and passed in JSON format. Set the base64 key to the encoded image and the mime_type key to the image format. For more information, see the examples.
   * 
   * @example
   * [{"base64": "/9j/4AAQSkZJRgABAQ...", "mime_type": "image/jpeg"}]
   */
  images?: string;
  /**
   * @remarks
   * The file path prefix. Only files that match the path prefix are retrieved.
   * 
   * @example
   * oss://bucketName/path/prefix/
   */
  path?: string;
  /**
   * @remarks
   * The question for knowledge base retrieval.
   * 
   * This parameter is required.
   * 
   * @example
   * What are the reports for the clothing category this month?
   */
  question?: string;
  /**
   * @remarks
   * The semantic rules. Currently, only "all" and "" are supported.
   * 
   * @example
   * all
   */
  semanticRules?: string;
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
   * The top K value for retrieving associated files.
   * 
   * @example
   * 5
   */
  topk?: number;
  /**
   * @remarks
   * The username. Only files that the user has permissions to access are retrieved.
   * 
   * @example
   * user_name1
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      images: 'Images',
      path: 'Path',
      question: 'Question',
      semanticRules: 'SemanticRules',
      tags: 'Tags',
      topk: 'Topk',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      images: 'string',
      path: 'string',
      question: 'string',
      semanticRules: 'string',
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

