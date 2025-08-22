// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSlrAndSlsProjectResponseBodySlsInfo extends $dara.Model {
  /**
   * @remarks
   * The endpoint of Log Service.
   * 
   * @example
   * cn-shanghai.log.*.com
   */
  endPoint?: string;
  /**
   * @remarks
   * The Logstore of Log Service.
   * 
   * @example
   * dcdn-edge-trlog
   */
  logStore?: string;
  /**
   * @remarks
   * The project of Log Service.
   * 
   * @example
   * dcdn-edge-rtlog-cn-cfc7****
   */
  project?: string;
  /**
   * @remarks
   * The region where Log Service resides.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      endPoint: 'EndPoint',
      logStore: 'LogStore',
      project: 'Project',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endPoint: 'string',
      logStore: 'string',
      project: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSlrAndSlsProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * fe33a379-5053-4f22-a73c-826e2b44355d
   */
  requestId?: string;
  /**
   * @remarks
   * The information about Log Service.
   */
  slsInfo?: CreateSlrAndSlsProjectResponseBodySlsInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slsInfo: 'SlsInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slsInfo: CreateSlrAndSlsProjectResponseBodySlsInfo,
    };
  }

  validate() {
    if(this.slsInfo && typeof (this.slsInfo as any).validate === 'function') {
      (this.slsInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

