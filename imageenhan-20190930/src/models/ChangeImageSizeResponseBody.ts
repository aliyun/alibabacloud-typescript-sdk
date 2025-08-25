// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeImageSizeResponseBodyDataRetainLocation extends $dara.Model {
  /**
   * @example
   * 224
   */
  height?: number;
  /**
   * @example
   * 298
   */
  width?: number;
  /**
   * @example
   * 0
   */
  x?: number;
  /**
   * @example
   * 0
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeImageSizeResponseBodyData extends $dara.Model {
  retainLocation?: ChangeImageSizeResponseBodyDataRetainLocation;
  /**
   * @example
   * http://ivpd-cn-shanghai.oss-cn-shanghai.aliyuncs.com/upload/result_filter/2019-11-21/invi_filter_015743271470661000112_NVKmET.png?Expires=1574586347&OSSAccessKeyId=LTAI4FeJ8qKkYn6SrHhQ****&Signature=QqRAiqvyXsVlZ77M8yFc5QKJDE****
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      retainLocation: 'RetainLocation',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      retainLocation: ChangeImageSizeResponseBodyDataRetainLocation,
      url: 'string',
    };
  }

  validate() {
    if(this.retainLocation && typeof (this.retainLocation as any).validate === 'function') {
      (this.retainLocation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeImageSizeResponseBody extends $dara.Model {
  data?: ChangeImageSizeResponseBodyData;
  /**
   * @example
   * 2833446F-A431-40EB-A502-6EC9DFEEEEB0
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
      data: ChangeImageSizeResponseBodyData,
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

