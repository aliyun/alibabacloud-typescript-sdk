// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSafStartConfigResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * List of device types.
   */
  deviceTypes?: string[];
  /**
   * @remarks
   * Event codes.
   */
  eventCodes?: string[];
  /**
   * @remarks
   * Configuration language details.
   */
  languages?: string[];
  /**
   * @remarks
   * Server region
   */
  serverRegions?: string[];
  static names(): { [key: string]: string } {
    return {
      deviceTypes: 'deviceTypes',
      eventCodes: 'eventCodes',
      languages: 'languages',
      serverRegions: 'serverRegions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceTypes: { 'type': 'array', 'itemType': 'string' },
      eventCodes: { 'type': 'array', 'itemType': 'string' },
      languages: { 'type': 'array', 'itemType': 'string' },
      serverRegions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.deviceTypes)) {
      $dara.Model.validateArray(this.deviceTypes);
    }
    if(Array.isArray(this.eventCodes)) {
      $dara.Model.validateArray(this.eventCodes);
    }
    if(Array.isArray(this.languages)) {
      $dara.Model.validateArray(this.languages);
    }
    if(Array.isArray(this.serverRegions)) {
      $dara.Model.validateArray(this.serverRegions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSafStartConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Returned object
   */
  resultObject?: DescribeSafStartConfigResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: DescribeSafStartConfigResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

