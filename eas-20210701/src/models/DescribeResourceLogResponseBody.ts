// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Logstore of Log Service.
   * 
   * @example
   * access_log
   */
  logStore?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Network interfaces are updating
   */
  message?: string;
  /**
   * @remarks
   * The Log Service project that is associated with the resource group.
   * 
   * @example
   * eas-r-asdasdasd-sls
   */
  projectName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The state of the resource group.
   * 
   * @example
   * ResourceReady
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      logStore: 'LogStore',
      message: 'Message',
      projectName: 'ProjectName',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStore: 'string',
      message: 'string',
      projectName: 'string',
      requestId: 'string',
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

