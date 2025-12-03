// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsResponseBodyProjects extends $dara.Model {
  /**
   * @example
   * Project
   */
  categoryIdentifier?: string;
  /**
   * @example
   * 19xx7043xxxxxxx914
   */
  creator?: string;
  /**
   * @example
   * OJAY
   */
  customCode?: string;
  /**
   * @example
   * null
   */
  deleteTime?: number;
  /**
   * @example
   * xxx
   */
  description?: string;
  /**
   * @example
   * 1640778694000
   */
  gmtCreate?: number;
  /**
   * @example
   * https://xxxxxx.png
   */
  icon?: string;
  /**
   * @example
   * e8bxxxxxxxxxxxxxxxx23
   */
  identifier?: string;
  /**
   * @example
   * null
   */
  logicalStatus?: string;
  /**
   * @example
   * xxxx
   */
  name?: string;
  /**
   * @example
   * public
   */
  scope?: string;
  /**
   * @example
   * null
   */
  statusStageIdentifier?: string;
  /**
   * @example
   * null
   */
  typeIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      categoryIdentifier: 'categoryIdentifier',
      creator: 'creator',
      customCode: 'customCode',
      deleteTime: 'deleteTime',
      description: 'description',
      gmtCreate: 'gmtCreate',
      icon: 'icon',
      identifier: 'identifier',
      logicalStatus: 'logicalStatus',
      name: 'name',
      scope: 'scope',
      statusStageIdentifier: 'statusStageIdentifier',
      typeIdentifier: 'typeIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryIdentifier: 'string',
      creator: 'string',
      customCode: 'string',
      deleteTime: 'number',
      description: 'string',
      gmtCreate: 'number',
      icon: 'string',
      identifier: 'string',
      logicalStatus: 'string',
      name: 'string',
      scope: 'string',
      statusStageIdentifier: 'string',
      typeIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBody extends $dara.Model {
  /**
   * @example
   * Openapi.RequestError
   */
  errorCode?: string;
  /**
   * @example
   * error
   */
  errorMsg?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * ""
   */
  nextToken?: string;
  projects?: ListProjectsResponseBodyProjects[];
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      projects: 'projects',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      maxResults: 'number',
      nextToken: 'string',
      projects: { 'type': 'array', 'itemType': ListProjectsResponseBodyProjects },
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.projects)) {
      $dara.Model.validateArray(this.projects);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

