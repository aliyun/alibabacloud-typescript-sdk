// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatS } from "./DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatS";


export class DescribeDataPushResultResponseBodyPushResultsPushResult extends $dara.Model {
  /**
   * @remarks
   * The name of the data file.
   * 
   * @example
   * gcs-pre-websocket-eip-telecom
   */
  name?: string;
  /**
   * @remarks
   * The push status of data files.
   */
  statusStatS?: DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatS;
  /**
   * @remarks
   * The version number of the data file.
   * 
   * @example
   * standard
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      statusStatS: 'StatusStatS',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      statusStatS: DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatS,
      version: 'string',
    };
  }

  validate() {
    if(this.statusStatS && typeof (this.statusStatS as any).validate === 'function') {
      (this.statusStatS as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

