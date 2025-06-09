// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MaxComputeExportConfigurationSink } from "./MaxComputeExportConfigurationSink";


export class MaxComputeExportConfiguration extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  fromTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sls-logstore-demo
   */
  logstore?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acs:ram::123456789:role/aliyunlogdefaultrole
   */
  roleArn?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sink?: MaxComputeExportConfigurationSink;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
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

