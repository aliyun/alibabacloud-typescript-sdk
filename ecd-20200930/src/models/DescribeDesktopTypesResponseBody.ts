// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDesktopTypesResponseBodyDesktopTypes } from "./DescribeDesktopTypesResponseBodyDesktopTypes";


export class DescribeDesktopTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The specifications.
   */
  desktopTypes?: DescribeDesktopTypesResponseBodyDesktopTypes[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopTypes: 'DesktopTypes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopTypes: { 'type': 'array', 'itemType': DescribeDesktopTypesResponseBodyDesktopTypes },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopTypes)) {
      $dara.Model.validateArray(this.desktopTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

