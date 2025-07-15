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

export class DescribeLogConfigResponseBodyLogInfos extends $dara.Model {
  logInfo?: DescribeLogConfigResponseBodyLogInfosLogInfo[];
  static names(): { [key: string]: string } {
    return {
      logInfo: 'LogInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logInfo: { 'type': 'array', 'itemType': DescribeLogConfigResponseBodyLogInfosLogInfo },
    };
  }

  validate() {
    if(Array.isArray(this.logInfo)) {
      $dara.Model.validateArray(this.logInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Info of the log config.
   */
  logInfos?: DescribeLogConfigResponseBodyLogInfos;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E3BC2706-ABDB-5B64-A12F-08DFD9E3F339
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logInfos: 'LogInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logInfos: DescribeLogConfigResponseBodyLogInfos,
      requestId: 'string',
    };
  }

  validate() {
    if(this.logInfos && typeof (this.logInfos as any).validate === 'function') {
      (this.logInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

