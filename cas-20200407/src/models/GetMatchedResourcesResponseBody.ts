// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMatchedResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * 请求接口返回的数据。
   * 
   * @example
   * []
   */
  data?: any;
  /**
   * @remarks
   * 分页参数：结果集的最大数量，默认值为 20。
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * 下一个查询开始 Token，NextToken 为空说明没有下一个。
   * 
   * @example
   * 1d2db86sca4384811e0b5e8707e68181f
   */
  nextToken?: string;
  /**
   * @remarks
   * 本次请求的 ID。
   * 
   * @example
   * 26F62CED-1E0E-51AA-B8EB-BCD61C5B0C50
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

