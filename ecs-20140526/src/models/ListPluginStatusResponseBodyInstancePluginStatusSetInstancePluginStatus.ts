// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPluginStatusResponseBodyInstancePluginStatusSetInstancePluginStatusPluginStatusSet } from "./ListPluginStatusResponseBodyInstancePluginStatusSetInstancePluginStatusPluginStatusSet";


export class ListPluginStatusResponseBodyInstancePluginStatusSetInstancePluginStatus extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The queried Cloud Assistant plug-ins.
   */
  pluginStatusSet?: ListPluginStatusResponseBodyInstancePluginStatusSetInstancePluginStatusPluginStatusSet;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pluginStatusSet: 'PluginStatusSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pluginStatusSet: ListPluginStatusResponseBodyInstancePluginStatusSetInstancePluginStatusPluginStatusSet,
    };
  }

  validate() {
    if(this.pluginStatusSet && typeof (this.pluginStatusSet as any).validate === 'function') {
      (this.pluginStatusSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

