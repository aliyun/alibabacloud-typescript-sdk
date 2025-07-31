// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataServiceAuthorizedProjectsResponseBodyProjectList extends $dara.Model {
  /**
   * @example
   * 1011
   */
  projectId?: number;
  /**
   * @example
   * test
   */
  projectName?: string;
  /**
   * @example
   * 2
   */
  role?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      projectName: 'string',
      role: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataServiceAuthorizedProjectsResponseBody extends $dara.Model {
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
  projectList?: GetDataServiceAuthorizedProjectsResponseBodyProjectList[];
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
      projectList: 'ProjectList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      projectList: { 'type': 'array', 'itemType': GetDataServiceAuthorizedProjectsResponseBodyProjectList },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.projectList)) {
      $dara.Model.validateArray(this.projectList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

