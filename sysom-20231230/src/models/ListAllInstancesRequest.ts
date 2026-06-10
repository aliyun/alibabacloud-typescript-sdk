// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Current page
   * 
   * @example
   * 1
   */
  current?: string;
  /**
   * @remarks
   * List of filter information.
   * 
   * @example
   * {}
   */
  filters?: string;
  /**
   * @remarks
   * Instance type.
   * 
   * @example
   * ecs
   */
  instanceType?: string;
  /**
   * @remarks
   * Managed type.
   * 
   * @example
   * managed
   */
  managedType?: string;
  /**
   * @remarks
   * Maximum number of records to retrieve in a single request.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * Paging cursor.  
   * > If this parameter is not empty, it indicates that more data is available.
   * 
   * @example
   * U+w1wv2R4ZWR5oZLXD0+Dp4dD+2BRJj42DLT6GrZysw=
   */
  nextToken?: string;
  /**
   * @remarks
   * Number of entries returned per page. Default value: pageSize=10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * Plugin ID
   * 
   * @example
   * 01fc4a0b-f199-4885-9861-b4054a310fe7
   */
  pluginId?: string;
  /**
   * @remarks
   * Region ID.
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

