// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPcrInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the report was created. The timestamp is in milliseconds.
   * 
   * @example
   * 1709109790532
   */
  createTime?: string;
  /**
   * @remarks
   * Report name
   * 
   * @example
   * report name
   */
  name?: string;
  /**
   * @remarks
   * Download url link.
   * 
   * @example
   * https://energy.alibabacloud.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      name: 'name',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      name: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPcrInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetPcrInfoResponseBodyData;
  /**
   * @remarks
   * The ID of the request. The value is unique for each request. This facilitates subsequent troubleshooting.
   * 
   * @example
   * 4A0AEC56-5C9A-5D47-93DF-7227836FFF82
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetPcrInfoResponseBodyData,
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

