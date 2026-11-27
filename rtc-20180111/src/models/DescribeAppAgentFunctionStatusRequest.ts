// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppAgentFunctionStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. Create and query it in the console. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

