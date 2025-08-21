// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushNoticeToiOSRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DEV
   */
  apnsEnv?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 24780725
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Hello World
   */
  body?: string;
  /**
   * @example
   * {"k1":"ios","k2":"v2"}
   */
  extParameters?: string;
  /**
   * @example
   * 123
   */
  jobKey?: string;
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
   * @example
   * title
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      apnsEnv: 'ApnsEnv',
      appKey: 'AppKey',
      body: 'Body',
      extParameters: 'ExtParameters',
      jobKey: 'JobKey',
      target: 'Target',
      targetValue: 'TargetValue',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apnsEnv: 'string',
      appKey: 'number',
      body: 'string',
      extParameters: 'string',
      jobKey: 'string',
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

