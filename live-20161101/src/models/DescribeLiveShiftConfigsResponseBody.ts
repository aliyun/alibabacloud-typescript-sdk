// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveShiftConfigsResponseBodyContentConfig extends $dara.Model {
  /**
   * @remarks
   * The application for which you configure time shifting.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * The domain name for which you configure time shifting.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Whether to ignore time shift generation for the transcode stream.
   * 
   * *   true: Ignore time shifting generation.
   * *   false: Generate time shifting.
   * 
   * The default value is true.
   * 
   * @example
   * true
   */
  ignoreTranscode?: boolean;
  /**
   * @remarks
   * The name of the live stream for which you configure time shifting.
   * 
   * @example
   * liveStream****
   */
  streamName?: string;
  /**
   * @remarks
   * The number of days for which the time shifting configurations are retained.
   * 
   * @example
   * 7
   */
  vision?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      ignoreTranscode: 'IgnoreTranscode',
      streamName: 'StreamName',
      vision: 'Vision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      ignoreTranscode: 'boolean',
      streamName: 'string',
      vision: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveShiftConfigsResponseBodyContent extends $dara.Model {
  config?: DescribeLiveShiftConfigsResponseBodyContentConfig[];
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'array', 'itemType': DescribeLiveShiftConfigsResponseBodyContentConfig },
    };
  }

  validate() {
    if(Array.isArray(this.config)) {
      $dara.Model.validateArray(this.config);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveShiftConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time shifting configurations.
   */
  content?: DescribeLiveShiftConfigsResponseBodyContent;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B49E6DDA-F413-422B-B58E-2FA23F286726
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: DescribeLiveShiftConfigsResponseBodyContent,
      requestId: 'string',
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

