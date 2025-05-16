// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobLogRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-jeJki6****
   */
  clusterId?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.manager
   */
  jobId?: string;
  /**
   * @remarks
   * The log type. Valid values:
   * 
   * *   stdout: standard output logs.
   * *   stderr: error output logs.
   * *   all: all logs.
   * 
   * Default value: all.
   * 
   * @example
   * stdout
   */
  logType?: string;
  /**
   * @remarks
   * The position where logs start to be read.
   * 
   * Unit: bytes.
   * 
   * Default value: 0.
   * 
   * @example
   * 0
   */
  offset?: string;
  /**
   * @remarks
   * The maximum size of logs that you can read in a single request.
   * 
   * Unit: bytes.
   * 
   * Default value: 10240.
   * 
   * @example
   * 20480
   */
  size?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      jobId: 'JobId',
      logType: 'LogType',
      offset: 'Offset',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      jobId: 'string',
      logType: 'string',
      offset: 'string',
      size: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

