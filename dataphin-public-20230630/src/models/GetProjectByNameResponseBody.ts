// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectByNameResponseBodyProjectInfoWhiteLists extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * xx 白名单
   */
  description?: string;
  /**
   * @remarks
   * Ip
   * 
   * @example
   * 10.11.1.21
   */
  ip?: string;
  /**
   * @remarks
   * The port.
   * 
   * @example
   * 5432
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

export class GetProjectByNameResponseBodyProjectInfo extends $dara.Model {
  /**
   * @remarks
   * The display name of the business unit to which the project belongs.
   * 
   * @example
   * 测试
   */
  bizUnitDisplayName?: string;
  /**
   * @remarks
   * The ID of the business unit to which the project belongs.
   * 
   * @example
   * 101131
   */
  bizUnitId?: number;
  /**
   * @remarks
   * The ID of the associated compute source.
   * 
   * @example
   * 101711
   */
  computeSourceId?: number;
  /**
   * @remarks
   * The name of the associated compute source.
   * 
   * @example
   * ds1
   */
  computeSourceName?: string;
  /**
   * @remarks
   * The project description.
   * 
   * @example
   * 测试
   */
  description?: string;
  /**
   * @remarks
   * The display name of the project.
   * 
   * @example
   * xx test
   */
  displayName?: string;
  /**
   * @remarks
   * The environment identifier.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * The creation time, in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2025-06-10 10:01:01
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time, in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2025-06-10 10:01:01
   */
  gmtModified?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 1030111021
   */
  id?: number;
  /**
   * @remarks
   * The project mode.
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
   * test
   */
  name?: string;
  /**
   * @remarks
   * The namespace type. Valid values:
   * - PUBLIC: public type
   * - APPLICATION: application type
   * - BASE: base type.
   * 
   * @example
   * BASE
   */
  nameSpaceTag?: string;
  /**
   * @remarks
   * The project owner.
   * 
   * @example
   * 30012011
   */
  owner?: string;
  /**
   * @remarks
   * The project owner.
   * 
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @remarks
   * The ID of the associated real-time compute source.
   * 
   * @example
   * 201711
   */
  streamComputeSourceId?: number;
  /**
   * @remarks
   * The name of the associated real-time compute source.
   * 
   * @example
   * ds2
   */
  streamComputeSourceName?: string;
  /**
   * @remarks
   * The project type. Valid values:
   * - DISTILL: distillation project
   * - GENERAL: general project.
   * 
   * @example
   * GENERAL
   */
  type?: string;
  /**
   * @remarks
   * The whitelists.
   */
  whiteLists?: GetProjectByNameResponseBodyProjectInfoWhiteLists[];
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
      whiteLists: { 'type': 'array', 'itemType': GetProjectByNameResponseBodyProjectInfoWhiteLists },
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

export class GetProjectByNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
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
   * The details of the backend exception.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * The project details.
   */
  projectInfo?: GetProjectByNameResponseBodyProjectInfo;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      projectInfo: GetProjectByNameResponseBodyProjectInfo,
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

