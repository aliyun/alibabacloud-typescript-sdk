// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSupportedPricingApisResponseBodySupportedApis extends $dara.Model {
  /**
   * @remarks
   * The OpenAPI name in PascalCase, such as RunInstances.
   */
  apiName?: string;
  /**
   * @remarks
   * The POP product code, such as Ecs, Rds, or Alb. This value corresponds to the popCode field used in price inquiry requests.
   */
  popCode?: string;
  /**
   * @remarks
   * The OpenAPI version number, such as 2014-05-26.
   */
  popVersion?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'apiName',
      popCode: 'popCode',
      popVersion: 'popVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      popCode: 'string',
      popVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSupportedPricingApisResponseBody extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   */
  requestId?: string;
  /**
   * @remarks
   * The array of OpenAPI triplets that support price inquiry. The triplets are sorted in alphabetical order by popCode, popVersion, and apiName.
   */
  supportedApis?: ListSupportedPricingApisResponseBodySupportedApis[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      supportedApis: 'supportedApis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      supportedApis: { 'type': 'array', 'itemType': ListSupportedPricingApisResponseBodySupportedApis },
    };
  }

  validate() {
    if(Array.isArray(this.supportedApis)) {
      $dara.Model.validateArray(this.supportedApis);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

