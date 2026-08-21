// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourcesRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * 1808078950770264
   */
  cluster?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-wz9d00ut2ska3mlyhn6j
   */
  instance?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * mem
   */
  type?: string;
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      cluster: 'cluster',
      instance: 'instance',
      type: 'type',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      cluster: 'string',
      instance: 'string',
      type: 'string',
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

