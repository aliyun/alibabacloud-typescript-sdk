// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJavaStartUpConfigResponseBodyJavaStartUpConfig extends $dara.Model {
  /**
   * @remarks
   * The displayed startup parameter configuration.
   * 
   * @example
   * -Xms512m
   */
  originalConfigs?: string;
  /**
   * @remarks
   * The effective startup parameter configuration.
   * 
   * @example
   * -Xms512m
   */
  startUpArgs?: string;
  static names(): { [key: string]: string } {
    return {
      originalConfigs: 'OriginalConfigs',
      startUpArgs: 'StartUpArgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalConfigs: 'string',
      startUpArgs: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJavaStartUpConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The configuration of Java startup parameters.
   */
  javaStartUpConfig?: GetJavaStartUpConfigResponseBodyJavaStartUpConfig;
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4823-bhjf-23u4-eiufh
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      javaStartUpConfig: 'JavaStartUpConfig',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      javaStartUpConfig: GetJavaStartUpConfigResponseBodyJavaStartUpConfig,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.javaStartUpConfig && typeof (this.javaStartUpConfig as any).validate === 'function') {
      (this.javaStartUpConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

