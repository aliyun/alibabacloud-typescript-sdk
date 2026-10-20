// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  current?: string;
  /**
   * @remarks
   * The list of filters.
   * 
   * @example
   * {}
   */
  filters?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ecs
   */
  instanceType?: string;
  /**
   * @remarks
   * The management type.
   * 
   * @example
   * managed
   */
  managedType?: string;
  /**
   * @remarks
   * The maximum number of records to return in a single request.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination cursor.
   * > If this parameter is not empty, it indicates that more data is available.
   * 
   * @example
   * U+w1wv2R4ZWR5oZLXD0+Dp4dD+2BRJj42DLT6GrZysw=
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The plugin ID.
   * 
   * @example
   * 01fc4a0b-f199-4885-9861-b4054a310fe7
   */
  pluginId?: string;
  /**
   * @remarks
   * The region ID.
   * 
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

