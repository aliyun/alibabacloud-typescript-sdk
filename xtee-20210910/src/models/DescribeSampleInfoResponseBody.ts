// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSampleInfoResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 3144
   */
  id?: number;
  /**
   * @remarks
   * The sample tags.
   * 
   * @example
   * em0102
   */
  sampleTags?: string;
  /**
   * @remarks
   * The data sample type.
   * 
   * @example
   * PHONE
   */
  sampleType?: string;
  /**
   * @remarks
   * The sample value.
   * 
   * @example
   * 17700000000
   */
  sampleValue?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1753804800000
   */
  updateTime?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      sampleTags: 'sampleTags',
      sampleType: 'sampleType',
      sampleValue: 'sampleValue',
      updateTime: 'updateTime',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      sampleTags: 'string',
      sampleType: 'string',
      sampleValue: 'string',
      updateTime: 'string',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSampleInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * The returned object.
   */
  resultObject?: DescribeSampleInfoResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: DescribeSampleInfoResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

