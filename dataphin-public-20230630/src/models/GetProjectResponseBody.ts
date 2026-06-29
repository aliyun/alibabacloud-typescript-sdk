// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectResponseBodyProjectInfoWhiteLists extends $dara.Model {
  /**
   * @remarks
   * The whitelist description.
   * 
   * @example
   * whitelist for xxx
   */
  description?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 10.209.47.198
   */
  ip?: string;
  /**
   * @remarks
   * The port.
   * 
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
   * @remarks
   * The dependent data module display name.
   * 
   * @example
   * 业务板块显示名
   */
  bizUnitDisplayName?: string;
  /**
   * @remarks
   * The dependent data module ID.
   * 
   * @example
   * 业务板块Id
   */
  bizUnitId?: number;
  /**
   * @remarks
   * The compute source ID.
   * 
   * @example
   * 项目依赖计算源Id
   */
  computeSourceId?: number;
  /**
   * @remarks
   * The compute source name.
   * 
   * @example
   * 项目依赖计算源名
   */
  computeSourceName?: string;
  /**
   * @remarks
   * The project description.
   * 
   * @example
   * project for xxx
   */
  description?: string;
  /**
   * @remarks
   * The project display name.
   * 
   * @example
   * 项目显示名
   */
  displayName?: string;
  /**
   * @remarks
   * The environment.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1703048484000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1703048484000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 12356
   */
  id?: number;
  /**
   * @remarks
   * The project mode. Valid values:
   * - BASIC
   * - DEV_PROD
   * 
   * @example
   * BASIC
   */
  mode?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * dp_test
   */
  name?: string;
  /**
   * @remarks
   * The project tag.
   * 
   * @example
   * GENERAL
   */
  nameSpaceTag?: string;
  /**
   * @remarks
   * The project owner ID.
   * 
   * @example
   * 101111
   */
  owner?: string;
  /**
   * @remarks
   * The project owner.
   * 
   * @example
   * 测试用户
   */
  ownerName?: string;
  /**
   * @remarks
   * The stream compute source ID.
   * 
   * @example
   * 项目依赖实时计算源Id
   */
  streamComputeSourceId?: number;
  /**
   * @remarks
   * The stream compute source name.
   * 
   * @example
   * 项目依赖实时计算源名
   */
  streamComputeSourceName?: string;
  /**
   * @remarks
   * The project type.
   * 
   * @example
   * GENERAL
   */
  type?: string;
  /**
   * @remarks
   * The whitelists.
   */
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
   * @remarks
   * The error code. A value of OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The project details.
   */
  projectInfo?: GetProjectResponseBodyProjectInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
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

