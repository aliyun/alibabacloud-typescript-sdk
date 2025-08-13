// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBasicStartRequest extends $dara.Model {
  /**
   * @remarks
   * Application appkey.
   * 
   * @example
   * ***
   */
  appKey?: string;
  /**
   * @remarks
   * End time, accurate to milliseconds (ms).
   * 
   * @example
   * 20250320
   */
  endDs?: string;
  /**
   * @remarks
   * Region code
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Service to call
   * 
   * @example
   * service_tender_cee
   */
  service?: string;
  /**
   * @remarks
   * Start time, accurate to milliseconds (ms).
   * 
   * @example
   * 20250310
   */
  startDs?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'appKey',
      endDs: 'endDs',
      regId: 'regId',
      service: 'service',
      startDs: 'startDs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      endDs: 'string',
      regId: 'string',
      service: 'string',
      startDs: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

