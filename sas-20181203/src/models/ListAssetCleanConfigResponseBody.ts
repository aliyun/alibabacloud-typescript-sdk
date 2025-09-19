// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAssetCleanConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of days before hosts whose provider cannot be identified are automatically cleaned after they enter the offline state. Valid value: an integer that ranges from 1 to 30.
   * 
   * @example
   * 7
   */
  cleanDays?: number;
  /**
   * @remarks
   * Indicates whether the configuration takes effect. Valid values:
   * 
   * *   **0**: The configuration does not take effect.
   * *   **1**: The configuration takes effect.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The type of hosts that are cleaned.
   * 
   * *   The value is set to **1**, which indicates hosts whose provider cannot be identified.
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      cleanDays: 'CleanDays',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cleanDays: 'number',
      status: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssetCleanConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of cleanup configurations.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The asset cleanup configurations.
   */
  data?: ListAssetCleanConfigResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20456DD5-5CBF-5015-9173-12CA4246B***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      data: { 'type': 'array', 'itemType': ListAssetCleanConfigResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

