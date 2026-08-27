// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPluginRepositoriesResponseBodyDataRepositories extends $dara.Model {
  /**
   * @example
   * 12345678
   */
  repositoryId?: string;
  /**
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
   * @example
   * 664f1e2xxxx
   */
  organizationId?: string;
  /**
   * @example
   * my-org
   */
  organizationName?: string;
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
   * @example
   * 200
   */
  code?: string;
  data?: ListPluginRepositoriesResponseBodyData[];
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
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

