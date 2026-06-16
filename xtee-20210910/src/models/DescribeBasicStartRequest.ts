// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBasicStartRequest extends $dara.Model {
  /**
   * @remarks
   * The AppKey of the application.
   * 
   * @example
   * ***
   */
  appKey?: string;
  /**
   * @remarks
   * The end time, in milliseconds (ms).
   * 
   * @example
   * 20250320
   */
  endDs?: string;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The service to call.
   * 
   * @example
   * service_tender_cee
   */
  service?: string;
  /**
   * @remarks
   * The start time, in milliseconds (ms).
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

