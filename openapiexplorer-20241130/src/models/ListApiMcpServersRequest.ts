// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiMcpServersRequest extends $dara.Model {
  /**
   * @example
   * 2024-10-30T02:10:13Z
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * v6ZZ7ftCzEILW***
   */
  id?: string;
  /**
   * @example
   * oss
   */
  keyword?: string;
  /**
   * @example
   * ZH_CN
   */
  language?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAZjtYxxxxxxxx
   */
  nextToken?: string;
  /**
   * @example
   * 5
   */
  skip?: number;
  /**
   * @example
   * system
   */
  sourceType?: string;
  /**
   * @example
   * 2024-06-05T02:27:39Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      id: 'id',
      keyword: 'keyword',
      language: 'language',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      skip: 'skip',
      sourceType: 'sourceType',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      id: 'string',
      keyword: 'string',
      language: 'string',
      maxResults: 'number',
      nextToken: 'string',
      skip: 'number',
      sourceType: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

