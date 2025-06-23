// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePortViewSourceProvincesResponseBodySourceProvinces } from "./DescribePortViewSourceProvincesResponseBodySourceProvinces";


export class DescribePortViewSourceProvincesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C33EB3D5-AF96-43CA-9C7E-37A81BC06A1E
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the administrative region in China from which the requests are sent.
   */
  sourceProvinces?: DescribePortViewSourceProvincesResponseBodySourceProvinces[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sourceProvinces: 'SourceProvinces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sourceProvinces: { 'type': 'array', 'itemType': DescribePortViewSourceProvincesResponseBodySourceProvinces },
    };
  }

  validate() {
    if(Array.isArray(this.sourceProvinces)) {
      $dara.Model.validateArray(this.sourceProvinces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

