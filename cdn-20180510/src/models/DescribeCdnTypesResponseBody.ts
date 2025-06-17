// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnTypesResponseBodyCdnTypes } from "./DescribeCdnTypesResponseBodyCdnTypes";


export class DescribeCdnTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The types of the domain names.
   */
  cdnTypes?: DescribeCdnTypesResponseBodyCdnTypes;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BDA62CE4-3477-439A-B52E-D2D7C829D7C1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cdnTypes: 'CdnTypes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdnTypes: DescribeCdnTypesResponseBodyCdnTypes,
      requestId: 'string',
    };
  }

  validate() {
    if(this.cdnTypes && typeof (this.cdnTypes as any).validate === 'function') {
      (this.cdnTypes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

