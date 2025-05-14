// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExternalAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The agent configurations in the YAML format.
   * 
   * @example
   * apiVersion: v1****
   */
  config?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

