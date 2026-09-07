// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKnowledgeTagsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp19aaaaaa****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The location of the knowledge base document.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://bucket/doc.pdf
   */
  fileLocation?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      fileLocation: 'FileLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      fileLocation: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

