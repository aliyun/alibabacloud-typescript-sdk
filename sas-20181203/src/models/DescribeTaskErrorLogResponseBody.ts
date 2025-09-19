// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTaskErrorLogResponseBodyLogs extends $dara.Model {
  /**
   * @remarks
   * The text content of the log.
   * 
   * @example
   * mv: cannot move \\"CentOS-Base.repo\\" to \\"CentOS-Base.repo.backup\\": Permission denied
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskErrorLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the error logs.
   */
  logs?: DescribeTaskErrorLogResponseBodyLogs[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F929E952-EBFC-56C3-BD35-BF8B59024C69
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': DescribeTaskErrorLogResponseBodyLogs },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

