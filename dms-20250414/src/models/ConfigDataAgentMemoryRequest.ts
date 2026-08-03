// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigDataAgentMemoryRequest extends $dara.Model {
  /**
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  /**
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

