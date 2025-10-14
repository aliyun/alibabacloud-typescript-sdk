// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdcVersionListResponseBodyData extends $dara.Model {
  versionList?: string[];
  static names(): { [key: string]: string } {
    return {
      versionList: 'VersionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.versionList)) {
      $dara.Model.validateArray(this.versionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdcVersionListResponseBody extends $dara.Model {
  data?: DescribeCdcVersionListResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 97632117-E477-5FE8-B424-F059CBBDD919
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeCdcVersionListResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

