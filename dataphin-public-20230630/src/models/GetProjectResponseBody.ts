// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectResponseBodyProjectInfoWhiteLists extends $dara.Model {
  /**
   * @example
   * whitelist for xxx
   */
  description?: string;
  /**
   * @remarks
   * ip
   * 
   * @example
   * 10.209.47.198
   */
  ip?: string;
  /**
   * @example
   * 3306
   */
  port?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ip: 'Ip',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ip: 'string',
      port: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyProjectInfo extends $dara.Model {
  /**
   * @example
   * 测试
   */
  bizUnitDisplayName?: string;
  /**
   * @example
   * 101131
   */
  bizUnitId?: number;
  /**
   * @example
   * 101711
   */
  computeSourceId?: number;
  /**
   * @example
   * ds1
   */
  computeSourceName?: string;
  /**
   * @example
   * project for xxx
   */
  description?: string;
  /**
   * @example
   * xx test
   */
  displayName?: string;
  /**
   * @example
   * DEV
   */
  env?: string;
  /**
   * @example
   * 1703048484000
   */
  gmtCreate?: string;
  /**
   * @example
   * 1703048484000
   */
  gmtModified?: string;
  /**
   * @example
   * 12356
   */
  id?: number;
  /**
   * @example
   * BASIC
   */
  mode?: string;
  /**
   * @example
   * dp_test
   */
  name?: string;
  /**
   * @example
   * GENERAL
   */
  nameSpaceTag?: string;
  /**
   * @example
   * 101111
   */
  owner?: string;
  /**
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @example
   * 201711
   */
  streamComputeSourceId?: number;
  /**
   * @example
   * ds2
   */
  streamComputeSourceName?: string;
  /**
   * @example
   * GENERAL
   */
  type?: string;
  whiteLists?: GetProjectResponseBodyProjectInfoWhiteLists[];
  static names(): { [key: string]: string } {
    return {
      bizUnitDisplayName: 'BizUnitDisplayName',
      bizUnitId: 'BizUnitId',
      computeSourceId: 'ComputeSourceId',
      computeSourceName: 'ComputeSourceName',
      description: 'Description',
      displayName: 'DisplayName',
      env: 'Env',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      mode: 'Mode',
      name: 'Name',
      nameSpaceTag: 'NameSpaceTag',
      owner: 'Owner',
      ownerName: 'OwnerName',
      streamComputeSourceId: 'StreamComputeSourceId',
      streamComputeSourceName: 'StreamComputeSourceName',
      type: 'Type',
      whiteLists: 'WhiteLists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitDisplayName: 'string',
      bizUnitId: 'number',
      computeSourceId: 'number',
      computeSourceName: 'string',
      description: 'string',
      displayName: 'string',
      env: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      mode: 'string',
      name: 'string',
      nameSpaceTag: 'string',
      owner: 'string',
      ownerName: 'string',
      streamComputeSourceId: 'number',
      streamComputeSourceName: 'string',
      type: 'string',
      whiteLists: { 'type': 'array', 'itemType': GetProjectResponseBodyProjectInfoWhiteLists },
    };
  }

  validate() {
    if(Array.isArray(this.whiteLists)) {
      $dara.Model.validateArray(this.whiteLists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  projectInfo?: GetProjectResponseBodyProjectInfo;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      projectInfo: 'ProjectInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      projectInfo: GetProjectResponseBodyProjectInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.projectInfo && typeof (this.projectInfo as any).validate === 'function') {
      (this.projectInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

