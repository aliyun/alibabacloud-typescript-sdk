// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MLLabelParamSettings } from "./MllabelParamSettings";


export class MLLabelParam extends $dara.Model {
  /**
   * @example
   * 1695090077
   */
  createTime?: number;
  /**
   * @example
   * 默认表
   */
  description?: string;
  /**
   * @example
   * abbd488f6dd42d294495fb780858e83d
   */
  labelId?: string;
  /**
   * @example
   * 1695090077
   */
  lastModifyTime?: number;
  /**
   * @example
   * 标签表
   */
  name?: string;
  settings?: MLLabelParamSettings[];
  /**
   * @example
   * xxx
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      labelId: 'labelId',
      lastModifyTime: 'lastModifyTime',
      name: 'name',
      settings: 'settings',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      labelId: 'string',
      lastModifyTime: 'number',
      name: 'string',
      settings: { 'type': 'array', 'itemType': MLLabelParamSettings },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.settings)) {
      $dara.Model.validateArray(this.settings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

