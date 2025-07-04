// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetModelResponseBodyResultContent } from "./GetModelResponseBodyResultContent";


export class GetModelResponseBodyResult extends $dara.Model {
  content?: GetModelResponseBodyResultContent;
  /**
   * @example
   * 2024-05-21 16:05:26
   */
  createTime?: string;
  /**
   * @example
   * 128
   */
  dimension?: number;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * ok
   */
  status?: string;
  /**
   * @example
   * text_embedding
   */
  type?: string;
  /**
   * @example
   * 2024-05-21 16:05:26
   */
  updateTime?: string;
  /**
   * @example
   * http://***.platform-cn-shanghai.opensearch.aliyuncs.com/v3/openapi/workspaces/default/text-embedding/ops-text-embedding-001
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      createTime: 'createTime',
      dimension: 'dimension',
      name: 'name',
      status: 'status',
      type: 'type',
      updateTime: 'updateTime',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: GetModelResponseBodyResultContent,
      createTime: 'string',
      dimension: 'number',
      name: 'string',
      status: 'string',
      type: 'string',
      updateTime: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

