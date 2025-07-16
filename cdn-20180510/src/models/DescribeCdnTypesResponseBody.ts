// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnTypesResponseBodyCdnTypesCdnType extends $dara.Model {
  /**
   * @remarks
   * The description of the domain name type.
   * 
   * @example
   * Download Acceleration
   */
  desc?: string;
  /**
   * @remarks
   * The type of the domain name.
   * 
   * @example
   * download
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
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

export class DescribeCdnTypesResponseBodyCdnTypes extends $dara.Model {
  cdnType?: DescribeCdnTypesResponseBodyCdnTypesCdnType[];
  static names(): { [key: string]: string } {
    return {
      cdnType: 'CdnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdnType: { 'type': 'array', 'itemType': DescribeCdnTypesResponseBodyCdnTypesCdnType },
    };
  }

  validate() {
    if(Array.isArray(this.cdnType)) {
      $dara.Model.validateArray(this.cdnType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

