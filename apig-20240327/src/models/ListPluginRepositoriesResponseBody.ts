// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPluginRepositoriesResponseBodyDataRepositories extends $dara.Model {
  /**
   * @remarks
   * The Codeup repository ID (numeric string).
   * 
   * @example
   * 12345678
   */
  repositoryId?: string;
  /**
   * @remarks
   * The repository name.
   * 
   * @example
   * my-custom-plugin
   */
  repositoryName?: string;
  static names(): { [key: string]: string } {
    return {
      repositoryId: 'repositoryId',
      repositoryName: 'repositoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      repositoryId: 'string',
      repositoryName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPluginRepositoriesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Codeup organization ID.
   * 
   * @example
   * 664f1e2xxxx
   */
  organizationId?: string;
  /**
   * @remarks
   * The organization name.
   * 
   * @example
   * my-org
   */
  organizationName?: string;
  /**
   * @remarks
   * The list of repositories under the organization.
   */
  repositories?: ListPluginRepositoriesResponseBodyDataRepositories[];
  static names(): { [key: string]: string } {
    return {
      organizationId: 'organizationId',
      organizationName: 'organizationName',
      repositories: 'repositories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      organizationName: 'string',
      repositories: { 'type': 'array', 'itemType': ListPluginRepositoriesResponseBodyDataRepositories },
    };
  }

  validate() {
    if(Array.isArray(this.repositories)) {
      $dara.Model.validateArray(this.repositories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPluginRepositoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListPluginRepositoriesResponseBodyData[];
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FCA83-0416-588D-9763-2474980495F1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListPluginRepositoriesResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

