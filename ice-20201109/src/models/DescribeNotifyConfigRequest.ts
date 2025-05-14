// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNotifyConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 39f8e0bc005e4f309379701645f4****
   */
  AIAgentId?: string;
  static names(): { [key: string]: string } {
    return {
      AIAgentId: 'AIAgentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIAgentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

