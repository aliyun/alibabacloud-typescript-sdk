// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDesktopGroupDetailResponseBodyDesktops } from "./GetDesktopGroupDetailResponseBodyDesktops";


export class GetDesktopGroupDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cloud computers within the share.
   */
  desktops?: GetDesktopGroupDetailResponseBodyDesktops;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1B5268CE-5EB3-545F-9F38-A8BCF710****
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
      desktops: GetDesktopGroupDetailResponseBodyDesktops,
      requestId: 'string',
    };
  }

  validate() {
    if(this.desktops && typeof (this.desktops as any).validate === 'function') {
      (this.desktops as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

