// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClientAlertModeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 5
   */
  count?: number;
  /**
   * @remarks
   * The UUIDs of the assets.
   */
  uuids?: string[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      uuids: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.uuids)) {
      $dara.Model.validateArray(this.uuids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientAlertModeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: ListClientAlertModeResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A4EB8B1C-1DEC-5E18-BCD0-D1BBB3936FA7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListClientAlertModeResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

