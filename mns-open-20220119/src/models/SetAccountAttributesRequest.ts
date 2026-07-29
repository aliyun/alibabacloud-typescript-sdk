// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAccountAttributesRequest extends $dara.Model {
  /**
   * @example
   * 06273500-249
   */
  clientToken?: string;
  /**
   * @example
   * true
   */
  logEnabled?: boolean;
  /**
   * @example
   * test-logstore
   */
  logStoreName?: string;
  /**
   * @example
   * true
   */
  messageTraceEnabled?: boolean;
  /**
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

