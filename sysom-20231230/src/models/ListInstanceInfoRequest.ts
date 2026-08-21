// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceInfoRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @example
   * instance_tag
   */
  infoType?: string;
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
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * xiF/wDgaeitjjhVJYYzLwJ4dD+2BRJj42DLT6GrZysw=
   */
  nextToken?: string;
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
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      infoType: 'infoType',
      instanceType: 'instanceType',
      managedType: 'managedType',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      pluginId: 'pluginId',
      region: 'region',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      infoType: 'string',
      instanceType: 'string',
      managedType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pluginId: 'string',
      region: 'string',
      xSysomInvokeSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

