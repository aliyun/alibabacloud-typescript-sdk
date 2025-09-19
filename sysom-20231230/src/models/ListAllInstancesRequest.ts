// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllInstancesRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  current?: string;
  /**
   * @example
   * {}
   */
  filters?: string;
  /**
   * @example
   * ecs
   */
  instanceType?: string;
  /**
   * @example
   * managed
   */
  managedType?: string;
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * U+w1wv2R4ZWR5oZLXD0+Dp4dD+2BRJj42DLT6GrZysw=
   */
  nextToken?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * 01fc4a0b-f199-4885-9861-b4054a310fe7
   */
  pluginId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      current: 'current',
      filters: 'filters',
      instanceType: 'instanceType',
      managedType: 'managedType',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      pageSize: 'pageSize',
      pluginId: 'pluginId',
      region: 'region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'string',
      filters: 'string',
      instanceType: 'string',
      managedType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageSize: 'string',
      pluginId: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

