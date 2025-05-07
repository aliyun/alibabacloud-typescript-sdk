// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudResourceAccessedPortsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP ports.
   */
  http?: number[];
  /**
   * @remarks
   * The HTTPS ports.
   */
  https?: number[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C1823E96-EF4B-5BD2-9E02-1D18****3ED8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      http: 'Http',
      https: 'Https',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      http: { 'type': 'array', 'itemType': 'number' },
      https: { 'type': 'array', 'itemType': 'number' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.http)) {
      $dara.Model.validateArray(this.http);
    }
    if(Array.isArray(this.https)) {
      $dara.Model.validateArray(this.https);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

