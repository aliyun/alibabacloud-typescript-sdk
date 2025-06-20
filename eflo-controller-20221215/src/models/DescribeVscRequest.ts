// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVscRequest extends $dara.Model {
  /**
   * @remarks
   * The VSC ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vsc-001
   */
  vscId?: string;
  static names(): { [key: string]: string } {
    return {
      vscId: 'VscId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vscId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

