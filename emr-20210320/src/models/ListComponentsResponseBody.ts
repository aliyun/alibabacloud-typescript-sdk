// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Attribute } from "./Attribute";


export class ListComponentsResponseBodyComponents extends $dara.Model {
  /**
   * @remarks
   * 应用名称。
   * 
   * @example
   * KNOX
   */
  applicationName?: string;
  /**
   * @remarks
   * 属性列表。
   */
  attributes?: Attribute[];
  /**
   * @remarks
   * 组件名称。
   * 
   * @example
   * KNOX
   */
  componentName?: string;
  /**
   * @remarks
   * 命名空间。
   * 
   * @example
   * “”
   */
  namespace?: string;
  /**
   * @remarks
   * 安装该组件的机器总数。
   * 
   * @example
   * 1
   */
  replica?: number;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      attributes: 'Attributes',
      componentName: 'ComponentName',
      namespace: 'Namespace',
      replica: 'Replica',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      attributes: { 'type': 'array', 'itemType': Attribute },
      componentName: 'string',
      namespace: 'string',
      replica: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBody extends $dara.Model {
  components?: ListComponentsResponseBodyComponents[];
  /**
   * @remarks
   * 本次请求所返回的最大记录条数。
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * 返回读取到的数据位置，空代表数据已经读取完毕。
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C89568980
   */
  nextToken?: string;
  /**
   * @remarks
   * 请求ID。
   * 
   * @example
   * FFAC608A-5DC3-174F-93C6-9F88CA6D5875
   */
  requestId?: string;
  /**
   * @remarks
   * 本次请求条件下的数据总量。
   * 
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      components: 'Components',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      components: { 'type': 'array', 'itemType': ListComponentsResponseBodyComponents },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

