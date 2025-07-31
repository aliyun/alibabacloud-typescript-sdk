// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectByNameResponseBodyProjectInfoWhiteLists extends $dara.Model {
  /**
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
   * 测试
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
   * 2025-06-10 10:01:01
   */
  gmtCreate?: string;
  /**
   * @example
   * 2025-06-10 10:01:01
   */
  gmtModified?: string;
  /**
   * @example
   * 1030111021
   */
  id?: number;
  /**
   * @example
   * BASIC
   */
  mode?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * BASE
   */
  nameSpaceTag?: string;
  /**
   * @example
   * 30012011
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
   * internal error
   */
  message?: string;
  projectInfo?: GetProjectByNameResponseBodyProjectInfo;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
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

