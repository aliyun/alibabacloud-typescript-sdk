// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRetcodeLogstoreResponseBodyDataRetcodeSLSConfig extends $dara.Model {
  /**
   * @remarks
   * The Log Service Logstore.
   * 
   * @example
   * log-test-220431
   */
  logstore?: string;
  /**
   * @remarks
   * The Log Service project.
   * 
   * @example
   * test-project
   */
  project?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      logstore: 'Logstore',
      project: 'Project',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      project: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRetcodeLogstoreResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The content of the log.
   * 
   * @example
   * retcode app or task can not be found!
   */
  message?: string;
  /**
   * @remarks
   * The information about Log Service.
   */
  retcodeSLSConfig?: GetRetcodeLogstoreResponseBodyDataRetcodeSLSConfig;
  /**
   * @remarks
   * The status of the request.
   * 
   * @example
   * true
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      retcodeSLSConfig: 'RetcodeSLSConfig',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      retcodeSLSConfig: GetRetcodeLogstoreResponseBodyDataRetcodeSLSConfig,
      status: 'string',
    };
  }

  validate() {
    if(this.retcodeSLSConfig && typeof (this.retcodeSLSConfig as any).validate === 'function') {
      (this.retcodeSLSConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRetcodeLogstoreResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned struct.
   */
  data?: GetRetcodeLogstoreResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1A9C645C-C83F-4C9D-8CCB-29BEC9E1****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetRetcodeLogstoreResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

