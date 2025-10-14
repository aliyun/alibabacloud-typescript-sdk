// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeColumnarVersionListResponseBodyData extends $dara.Model {
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

export class DescribeColumnarVersionListResponseBody extends $dara.Model {
  data?: DescribeColumnarVersionListResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9B2F3840-****-475C-B269-2D5C3A31797C
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
      data: DescribeColumnarVersionListResponseBodyData,
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

