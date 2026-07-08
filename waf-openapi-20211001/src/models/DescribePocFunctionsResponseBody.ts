// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePocFunctionsResponseBodyFunctions extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the POC feature trial. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1760581677000
   */
  expireTime?: number;
  /**
   * @remarks
   * The type of the POC feature trial. Valid values:
   * 
   * - **apisec**: API security.
   * 
   * - **botWeb**: bot management for websites.
   * 
   * - **botApp**: bot management for apps.
   * 
   * - **largeLanguageModel**: AI-powered application protection.
   * 
   * @example
   * botWeb
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePocFunctionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of the POC feature details.
   */
  functions?: DescribePocFunctionsResponseBodyFunctions[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1557B42F-B889-460A-B17F-1DE5C5AD7FF2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      functions: 'Functions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functions: { 'type': 'array', 'itemType': DescribePocFunctionsResponseBodyFunctions },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.functions)) {
      $dara.Model.validateArray(this.functions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

