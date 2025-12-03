// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectInfoResponseBodyProject extends $dara.Model {
  /**
   * @example
   * null
   */
  category?: string;
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
   * xxx
   */
  description?: string;
  /**
   * @example
   * 1623916393000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1623916393000
   */
  gmtModified?: number;
  /**
   * @example
   * https://xxxxxx.png
   */
  icon?: string;
  /**
   * @example
   * https://xxxxxx.png
   */
  iconBig?: string;
  /**
   * @example
   * {"small":"https://xxxxxx.png","big":"https://img.yyyyyy.png"}
   */
  iconGroup?: string;
  /**
   * @example
   * https://img.yyyyyy.png
   */
  iconSmall?: string;
  /**
   * @example
   * null
   */
  id?: string;
  /**
   * @example
   * e8bxxxxxxxxxxxxxxxx23
   */
  identifier?: string;
  /**
   * @example
   * e8b2xxxxxx2abdxxxxxxxx23
   */
  identifierPath?: string;
  /**
   * @example
   * NORMAL
   */
  logicalStatus?: string;
  /**
   * @example
   * 19xx7043xxxxxxx914
   */
  modifier?: string;
  name?: string;
  /**
   * @example
   * 5e70xxxxxxcd000xxxxe96
   */
  organizationIdentifier?: string;
  /**
   * @example
   * null
   */
  parentIdentifier?: string;
  /**
   * @example
   * public
   */
  scope?: string;
  /**
   * @example
   * 8a40xxxxxxxxxxxxx64
   */
  statusIdentifier?: string;
  /**
   * @example
   * 8a4058a71159b68254......
   */
  statusStageIdentifier?: string;
  /**
   * @example
   * null
   */
  subType?: string;
  /**
   * @example
   * CustomProject
   */
  typeIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      categoryIdentifier: 'categoryIdentifier',
      creator: 'creator',
      customCode: 'customCode',
      description: 'description',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      icon: 'icon',
      iconBig: 'iconBig',
      iconGroup: 'iconGroup',
      iconSmall: 'iconSmall',
      id: 'id',
      identifier: 'identifier',
      identifierPath: 'identifierPath',
      logicalStatus: 'logicalStatus',
      modifier: 'modifier',
      name: 'name',
      organizationIdentifier: 'organizationIdentifier',
      parentIdentifier: 'parentIdentifier',
      scope: 'scope',
      statusIdentifier: 'statusIdentifier',
      statusStageIdentifier: 'statusStageIdentifier',
      subType: 'subType',
      typeIdentifier: 'typeIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      categoryIdentifier: 'string',
      creator: 'string',
      customCode: 'string',
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      icon: 'string',
      iconBig: 'string',
      iconGroup: 'string',
      iconSmall: 'string',
      id: 'string',
      identifier: 'string',
      identifierPath: 'string',
      logicalStatus: 'string',
      modifier: 'string',
      name: 'string',
      organizationIdentifier: 'string',
      parentIdentifier: 'string',
      scope: 'string',
      statusIdentifier: 'string',
      statusStageIdentifier: 'string',
      subType: 'string',
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

export class GetProjectInfoResponseBody extends $dara.Model {
  /**
   * @example
   * Openapi.RequestError
   */
  errorCode?: string;
  /**
   * @example
   * error
   */
  errorMessage?: string;
  project?: GetProjectInfoResponseBodyProject;
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
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      project: 'project',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      project: GetProjectInfoResponseBodyProject,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.project && typeof (this.project as any).validate === 'function') {
      (this.project as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

