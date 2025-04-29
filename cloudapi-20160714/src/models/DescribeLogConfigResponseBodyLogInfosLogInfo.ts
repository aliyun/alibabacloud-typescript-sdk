// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogConfigResponseBodyLogInfosLogInfo extends $dara.Model {
  /**
   * @remarks
   * The log type.
   * 
   * @example
   * PROVIDER
   */
  logType?: string;
  /**
   * @remarks
   * The region ID of the Logstore.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the Logstore in Log Service.
   * 
   * @example
   * slsstore
   */
  slsLogStore?: string;
  /**
   * @remarks
   * The name of the Log Service project.
   * 
   * @example
   * slsproject
   */
  slsProject?: string;
  static names(): { [key: string]: string } {
    return {
      logType: 'LogType',
      regionId: 'RegionId',
      slsLogStore: 'SlsLogStore',
      slsProject: 'SlsProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logType: 'string',
      regionId: 'string',
      slsLogStore: 'string',
      slsProject: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

