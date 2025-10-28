// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHookConfigurationResponseBodyHooksConfiguration extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a mount failure is ignored. Valid values:
   * 
   * *   **true**: A mount failure is ignored.
   * *   **false**: A mount failure is not ignored.
   * 
   * @example
   * true
   */
  ignoreFail?: boolean;
  /**
   * @remarks
   * The name of the mounted script.
   * 
   * @example
   * postprepareInstanceEnvironmentOnScaleOut
   */
  name?: string;
  /**
   * @remarks
   * The content of the mounted script.
   * 
   * @example
   * ls
   */
  script?: string;
  static names(): { [key: string]: string } {
    return {
      ignoreFail: 'IgnoreFail',
      name: 'Name',
      script: 'Script',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoreFail: 'boolean',
      name: 'string',
      script: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHookConfigurationResponseBody extends $dara.Model {
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
   * The information about the mounted script.
   */
  hooksConfiguration?: UpdateHookConfigurationResponseBodyHooksConfiguration[];
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
   * d498****-1dd8ec229862
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hooksConfiguration: 'HooksConfiguration',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      hooksConfiguration: { 'type': 'array', 'itemType': UpdateHookConfigurationResponseBodyHooksConfiguration },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hooksConfiguration)) {
      $dara.Model.validateArray(this.hooksConfiguration);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

