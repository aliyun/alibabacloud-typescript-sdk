// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebuildDesktopsResponseBodyRebuildResults extends $dara.Model {
  /**
   * @remarks
   * The rebuild result. A value of `success` indicates success. Otherwise, an error message is returned.
   * 
   * @example
   * IncorrectDesktopStatus
   */
  code?: string;
  /**
   * @remarks
   * The cloud computer ID.
   * 
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopId?: string;
  /**
   * @remarks
   * The error message. This parameter is not returned when `Code` is `success`.
   * 
   * @example
   * The current status of the desktop does not support this operation.
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      desktopId: 'DesktopId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      desktopId: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebuildDesktopsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The collection of rebuild results.
   */
  rebuildResults?: RebuildDesktopsResponseBodyRebuildResults[];
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
      rebuildResults: 'RebuildResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rebuildResults: { 'type': 'array', 'itemType': RebuildDesktopsResponseBodyRebuildResults },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.rebuildResults)) {
      $dara.Model.validateArray(this.rebuildResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

