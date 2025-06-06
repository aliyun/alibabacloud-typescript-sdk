// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TaskInvocation extends $dara.Model {
  /**
   * @example
   * c-nkj8shz7xxxx
   */
  instanceID?: string;
  /**
   * @example
   * E099843B-10A2-4936-9964-4E0EE263D564
   */
  invocationID?: string;
  /**
   * @example
   * acs:fc:cn-hangzhou:143xxxx:services/xxx.LATEST/functions/xxx
   */
  invocationTarget?: string;
  /**
   * @example
   * {"key1":"value1","key2":"value2"}
   */
  output?: string;
  /**
   * @example
   * 1B3058B1-F1C9-457C-B95C-2C250A4B3118
   */
  requestID?: string;
  /**
   * @example
   * my-sls-logstore
   */
  slsLogStore?: string;
  /**
   * @example
   * my-sls-project
   */
  slsProject?: string;
  /**
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceID: 'instanceID',
      invocationID: 'invocationID',
      invocationTarget: 'invocationTarget',
      output: 'output',
      requestID: 'requestID',
      slsLogStore: 'slsLogStore',
      slsProject: 'slsProject',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceID: 'string',
      invocationID: 'string',
      invocationTarget: 'string',
      output: 'string',
      requestID: 'string',
      slsLogStore: 'string',
      slsProject: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

