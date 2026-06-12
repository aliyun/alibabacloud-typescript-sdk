// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentInstanceConfigGrayConfigs extends $dara.Model {
  /**
   * @remarks
   * The matching rule.
   * 
   * @example
   * appVersion="1.0.0"
   */
  condition?: string;
  /**
   * @remarks
   * The content of the canary release configuration.
   * 
   * @example
   * {"enable":true}
   */
  content?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      content: 'content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      content: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

