// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDpiSignaturesResponseBodyDpiSignature extends $dara.Model {
  /**
   * @remarks
   * The ID of the application group to which the application belongs.
   * 
   * @example
   * 20
   */
  dpiGroupId?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 235
   */
  dpiSignatureId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * EdgeCast
   */
  dpiSignatureName?: string;
  /**
   * @remarks
   * The minimum version of the deep packet inspection (DPI) engine that supports the application.
   * 
   * @example
   * 0-0.0.1
   */
  minEngineVersion?: string;
  /**
   * @remarks
   * The minimum version of the signature library that supports the application.
   * 
   * @example
   * 20201117_1_0-0.0.1
   */
  minSignatureDbVersion?: string;
  static names(): { [key: string]: string } {
    return {
      dpiGroupId: 'DpiGroupId',
      dpiSignatureId: 'DpiSignatureId',
      dpiSignatureName: 'DpiSignatureName',
      minEngineVersion: 'MinEngineVersion',
      minSignatureDbVersion: 'MinSignatureDbVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiGroupId: 'string',
      dpiSignatureId: 'string',
      dpiSignatureName: 'string',
      minEngineVersion: 'string',
      minSignatureDbVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDpiSignaturesResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of applications.
   */
  dpiSignature?: ListDpiSignaturesResponseBodyDpiSignature[];
  /**
   * @remarks
   * The token for the next page of results.
   * 
   * @example
   * FFrMV38kR4****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 63081123-B7C0-4BC9-B9E5-59E77A616EC9
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of applications returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dpiSignature: 'DpiSignature',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiSignature: { 'type': 'array', 'itemType': ListDpiSignaturesResponseBodyDpiSignature },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dpiSignature)) {
      $dara.Model.validateArray(this.dpiSignature);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

