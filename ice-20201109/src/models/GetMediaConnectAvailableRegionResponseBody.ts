// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaConnectAvailableRegionResponseBodyContent extends $dara.Model {
  /**
   * @example
   * cn-shanghai
   */
  defaultRegion?: string;
  regionList?: string[];
  static names(): { [key: string]: string } {
    return {
      defaultRegion: 'DefaultRegion',
      regionList: 'RegionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultRegion: 'string',
      regionList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.regionList)) {
      $dara.Model.validateArray(this.regionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaConnectAvailableRegionResponseBody extends $dara.Model {
  content?: GetMediaConnectAvailableRegionResponseBodyContent;
  /**
   * @example
   * OK
   */
  description?: string;
  /**
   * @example
   * 41CB9D4C-4650-5723-BA89-D6824F706ACB
   */
  requestId?: string;
  /**
   * @example
   * 0
   */
  retCode?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      description: 'Description',
      requestId: 'RequestId',
      retCode: 'RetCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: GetMediaConnectAvailableRegionResponseBodyContent,
      description: 'string',
      requestId: 'string',
      retCode: 'number',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

