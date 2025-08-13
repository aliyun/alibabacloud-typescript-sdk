// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSampleInfoResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Primary key ID
   * 
   * @example
   * 3144
   */
  id?: number;
  /**
   * @remarks
   * Sample tags.
   * 
   * @example
   * em0102
   */
  sampleTags?: string;
  /**
   * @remarks
   * Sample type
   * 
   * @example
   * PHONE
   */
  sampleType?: string;
  /**
   * @remarks
   * Sample value.
   * 
   * @example
   * 17700000000
   */
  sampleValue?: string;
  /**
   * @remarks
   * Update time.
   * 
   * @example
   * 1753804800000
   */
  updateTime?: string;
  /**
   * @remarks
   * Version number.
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
   * Request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Returned object
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

