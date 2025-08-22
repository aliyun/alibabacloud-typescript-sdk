// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHighlightInfoResponseBodyDataModule extends $dara.Model {
  /**
   * @remarks
   * The highlighted data.
   * 
   * @example
   * [\\"data:image/php;base64\\"]
   */
  hit?: string;
  /**
   * @remarks
   * The type of the highlighted data.
   * 
   * @example
   * URL
   */
  key?: string;
  /**
   * @remarks
   * The complete data.
   * 
   * @example
   * data:image/php;base64,PD9waHAXXXXXXanVzdHR0dHXXXXXB0ZXN0Ijs/Pg==
   */
  raw?: string;
  static names(): { [key: string]: string } {
    return {
      hit: 'Hit',
      key: 'Key',
      raw: 'Raw',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hit: 'string',
      key: 'string',
      raw: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHighlightInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data model of the highlighted data.
   */
  dataModule?: DescribeHighlightInfoResponseBodyDataModule[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeHighlightInfoResponseBodyDataModule },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataModule)) {
      $dara.Model.validateArray(this.dataModule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

