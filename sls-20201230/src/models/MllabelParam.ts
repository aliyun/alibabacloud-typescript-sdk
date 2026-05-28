// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MLLabelParamSettings extends $dara.Model {
  /**
   * @remarks
   * The details of the configuration.
   * 
   * @example
   * ""
   */
  config?: string;
  /**
   * @remarks
   * The mode of the configuration.
   * 
   * @example
   * builtin
   */
  mode?: string;
  /**
   * @remarks
   * The task type of the configuration.
   * 
   * @example
   * Trace.RCA
   */
  type?: string;
  /**
   * @remarks
   * The version number of the configuration.
   * 
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
   * @remarks
   * The creation time.
   * 
   * @example
   * 1695090077
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the tag table.
   */
  description?: string;
  /**
   * @remarks
   * The unique identifier of the tag table.
   * 
   * @example
   * abbd488f6dd42d294495fb780858e83d
   */
  labelId?: string;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 1695090077
   */
  lastModifyTime?: number;
  /**
   * @remarks
   * The name of the tag table.
   */
  name?: string;
  /**
   * @remarks
   * The configurations of the tag tables.
   */
  settings?: MLLabelParamSettings[];
  /**
   * @remarks
   * The type of the tag table.
   * 
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

