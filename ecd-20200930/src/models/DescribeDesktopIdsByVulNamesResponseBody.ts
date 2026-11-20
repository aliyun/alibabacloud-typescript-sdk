// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopIdsByVulNamesResponseBodyDesktopItems extends $dara.Model {
  /**
   * @remarks
   * The cloud desktop ID.
   * 
   * @example
   * ecd-138dsptkrt00u****
   */
  desktopId?: string;
  /**
   * @remarks
   * The cloud desktop name.
   * 
   * @example
   * Graphics-21
   */
  desktopName?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      desktopName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopIdsByVulNamesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The array of cloud desktop information.
   */
  desktopItems?: DescribeDesktopIdsByVulNamesResponseBodyDesktopItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopItems: 'DesktopItems',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopItems: { 'type': 'array', 'itemType': DescribeDesktopIdsByVulNamesResponseBodyDesktopItems },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopItems)) {
      $dara.Model.validateArray(this.desktopItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

