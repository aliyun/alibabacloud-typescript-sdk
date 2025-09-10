// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MLLabelParamSettings extends $dara.Model {
  /**
   * @example
   * ""
   */
  config?: string;
  /**
   * @example
   * builtin
   */
  mode?: string;
  /**
   * @example
   * Trace.RCA
   */
  type?: string;
  /**
   * @example
   * 0.01
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      mode: 'mode',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      mode: 'string',
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

