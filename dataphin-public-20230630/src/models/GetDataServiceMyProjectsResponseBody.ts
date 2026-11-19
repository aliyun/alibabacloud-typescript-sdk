// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataServiceMyProjectsResponseBodyProjectList extends $dara.Model {
  /**
   * @remarks
   * The ID of the data service project.
   * 
   * @example
   * 102011
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the project.
   * 
   * @example
   * test
   */
  projectName?: string;
  /**
   * @remarks
   * The role. Valid values: 1: Super administrator, 2: Developer, 3: Application member, 4: Service project administrator, 5: O&M user.
   * 
   * @example
   * 1
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

export class GetDataServiceMyProjectsResponseBody extends $dara.Model {
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
   * The backend error details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * The list of data service projects.
   */
  projectList?: GetDataServiceMyProjectsResponseBodyProjectList[];
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
   * Indicates whether the request is successful.
   */
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
      projectList: { 'type': 'array', 'itemType': GetDataServiceMyProjectsResponseBodyProjectList },
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

