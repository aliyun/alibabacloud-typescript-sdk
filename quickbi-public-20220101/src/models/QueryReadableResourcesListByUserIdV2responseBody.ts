// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryReadableResourcesListByUserIdV2ResponseBodyResultDirectory extends $dara.Model {
  /**
   * @example
   * a3eecab7-618d-4f9f-*****
   */
  id?: string;
  name?: string;
  /**
   * @example
   * 88b680****
   */
  pathId?: string;
  pathName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      pathId: 'PathId',
      pathName: 'PathName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      pathId: 'string',
      pathName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReadableResourcesListByUserIdV2ResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 1611023338000
   */
  createTime?: string;
  description?: string;
  directory?: QueryReadableResourcesListByUserIdV2ResponseBodyResultDirectory;
  modifyName?: string;
  /**
   * @example
   * 1530078690000
   */
  modifyTime?: string;
  /**
   * @example
   * fe67f61a35a94b7da1a34ba174a7****
   */
  ownerId?: string;
  ownerName?: string;
  /**
   * @example
   * 0
   */
  securityLevel?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 1
   */
  thirdPartAuthFlag?: number;
  workName?: string;
  /**
   * @example
   * PAGE
   */
  workType?: string;
  /**
   * @example
   * ccd3428c-****-****-a608-26bae29dffee
   */
  worksId?: string;
  /**
   * @example
   * c5f86ad2-ef53-4c51-8720-162ecfdb****
   */
  workspaceId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      directory: 'Directory',
      modifyName: 'ModifyName',
      modifyTime: 'ModifyTime',
      ownerId: 'OwnerId',
      ownerName: 'OwnerName',
      securityLevel: 'SecurityLevel',
      status: 'Status',
      thirdPartAuthFlag: 'ThirdPartAuthFlag',
      workName: 'WorkName',
      workType: 'WorkType',
      worksId: 'WorksId',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      directory: QueryReadableResourcesListByUserIdV2ResponseBodyResultDirectory,
      modifyName: 'string',
      modifyTime: 'string',
      ownerId: 'string',
      ownerName: 'string',
      securityLevel: 'string',
      status: 'number',
      thirdPartAuthFlag: 'number',
      workName: 'string',
      workType: 'string',
      worksId: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    if(this.directory && typeof (this.directory as any).validate === 'function') {
      (this.directory as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReadableResourcesListByUserIdV2ResponseBody extends $dara.Model {
  /**
   * @example
   * D787E1A3-A93C********05DF8D885
   */
  requestId?: string;
  result?: QueryReadableResourcesListByUserIdV2ResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryReadableResourcesListByUserIdV2ResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

