// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushNoticeToAndroidRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * body
   */
  body?: string;
  /**
   * @example
   * {"key1":"value1","api_name":"PushNoticeToAndroidRequest"}
   */
  extParameters?: string;
  /**
   * @example
   * 123
   */
  jobKey?: string;
  storeOffline?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  target?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  targetValue?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * title
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      body: 'Body',
      extParameters: 'ExtParameters',
      jobKey: 'JobKey',
      storeOffline: 'StoreOffline',
      target: 'Target',
      targetValue: 'TargetValue',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      body: 'string',
      extParameters: 'string',
      jobKey: 'string',
      storeOffline: 'boolean',
      target: 'string',
      targetValue: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

