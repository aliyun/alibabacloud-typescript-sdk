// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAccountAttributesRequest extends $dara.Model {
  /**
   * @remarks
   * Ensures the idempotence of the request. You can generate the value on your client to ensure that the value is unique across different requests. The ClientToken parameter supports only ASCII characters and can be up to 64 characters in length. For more information, see Ensure idempotence.
   * 
   * @example
   * 06273500-249
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable the log management feature.
   * 
   * @example
   * true
   */
  logEnabled?: boolean;
  /**
   * @remarks
   * The name of the Simple Log Service Logstore.
   * 
   * @example
   * test-logstore
   */
  logStoreName?: string;
  /**
   * @remarks
   * Specifies whether to enable the message trace feature.
   * 
   * @example
   * true
   */
  messageTraceEnabled?: boolean;
  /**
   * @remarks
   * The name of the Simple Log Service project.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      logEnabled: 'LogEnabled',
      logStoreName: 'LogStoreName',
      messageTraceEnabled: 'MessageTraceEnabled',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      logEnabled: 'boolean',
      logStoreName: 'string',
      messageTraceEnabled: 'boolean',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

