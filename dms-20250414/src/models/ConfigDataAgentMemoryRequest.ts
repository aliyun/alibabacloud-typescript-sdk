// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigDataAgentMemoryRequest extends $dara.Model {
  /**
   * @remarks
   * The current DMS unit.
   * 
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @remarks
   * Specifies whether to enable memory generation. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Disabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable memory recall usage. Valid values:
   * 
   * true: Enabled.
   * 
   * false: Disabled.
   * 
   * @example
   * true
   */
  recallEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      DMSUnit: 'DMSUnit',
      enabled: 'Enabled',
      recallEnabled: 'RecallEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DMSUnit: 'string',
      enabled: 'boolean',
      recallEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

