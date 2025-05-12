// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDesktopInfoResponseBodyDesktops } from "./DescribeDesktopInfoResponseBodyDesktops";


export class DescribeDesktopInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The basic information about cloud computers.
   */
  desktops?: DescribeDesktopInfoResponseBodyDesktops[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 062B1439-709A-580E-85DF-CE97A1560565
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      desktops: 'Desktops',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktops: { 'type': 'array', 'itemType': DescribeDesktopInfoResponseBodyDesktops },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktops)) {
      $dara.Model.validateArray(this.desktops);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

