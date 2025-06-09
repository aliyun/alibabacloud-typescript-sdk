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

