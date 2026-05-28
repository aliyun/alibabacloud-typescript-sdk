// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MaxComputeExportConfigurationSink } from "./MaxComputeExportConfigurationSink";


export class MaxComputeExportConfiguration extends $dara.Model {
  /**
   * @remarks
   * The beginning of the time range to ship data. The value 1 specifies that the data shipping job ships data from the first log in the Logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * 1718380800
   */
  fromTime?: number;
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * my-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the Resource Access Management (RAM) role that is used to read data from Simple Log Service.
   * 
   * This parameter is required.
   * 
   * @example
   * acs:ram::1234567890:role/aliyunlogdefaultrole
   */
  roleArn?: string;
  /**
   * @remarks
   * The configuration of the MaxCompute data shipping job.
   * 
   * This parameter is required.
   */
  sink?: MaxComputeExportConfigurationSink;
  /**
   * @remarks
   * The end of the time range to ship data. The value 0 specifies that the data shipping job continuously ships data until the job is manually stopped.
   * 
   * This parameter is required.
   * 
   * @example
   * 1718390800
   */
  toTime?: number;
  static names(): { [key: string]: string } {
    return {
      fromTime: 'fromTime',
      logstore: 'logstore',
      roleArn: 'roleArn',
      sink: 'sink',
      toTime: 'toTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromTime: 'number',
      logstore: 'string',
      roleArn: 'string',
      sink: MaxComputeExportConfigurationSink,
      toTime: 'number',
    };
  }

  validate() {
    if(this.sink && typeof (this.sink as any).validate === 'function') {
      (this.sink as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

