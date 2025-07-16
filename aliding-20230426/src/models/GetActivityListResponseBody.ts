// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetActivityListResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 0q8gsudxxx
   */
  activityId?: string;
  /**
   * @example
   * activity123
   */
  activityName?: string;
  /**
   * @example
   * activity123
   */
  activityNameInEnglish?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      activityName: 'ActivityName',
      activityNameInEnglish: 'ActivityNameInEnglish',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'string',
      activityName: 'string',
      activityNameInEnglish: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetActivityListResponseBody extends $dara.Model {
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  result?: GetActivityListResponseBodyResult[];
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetActivityListResponseBodyResult },
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

