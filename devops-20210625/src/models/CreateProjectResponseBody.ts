// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectResponseBodyProject extends $dara.Model {
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
   * e8bxxxxxxxxxxxxxxxx23
   */
  identifier?: string;
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
  /**
   * @example
   * demo示例项目
   */
  name?: string;
  /**
   * @example
   * 5e70xxxxxxcd000xxxxe96
   */
  organizationIdentifier?: string;
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
   * 1
   */
  statusStageIdentifier?: string;
  /**
   * @example
   * CustomProject
   */
  typeIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      categoryIdentifier: 'categoryIdentifier',
      creator: 'creator',
      customCode: 'customCode',
      description: 'description',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      icon: 'icon',
      identifier: 'identifier',
      logicalStatus: 'logicalStatus',
      modifier: 'modifier',
      name: 'name',
      organizationIdentifier: 'organizationIdentifier',
      scope: 'scope',
      statusIdentifier: 'statusIdentifier',
      statusStageIdentifier: 'statusStageIdentifier',
      typeIdentifier: 'typeIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryIdentifier: 'string',
      creator: 'string',
      customCode: 'string',
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      icon: 'string',
      identifier: 'string',
      logicalStatus: 'string',
      modifier: 'string',
      name: 'string',
      organizationIdentifier: 'string',
      scope: 'string',
      statusIdentifier: 'string',
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

export class CreateProjectResponseBody extends $dara.Model {
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
  project?: CreateProjectResponseBodyProject;
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
      errorMsg: 'errorMsg',
      project: 'project',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      project: CreateProjectResponseBodyProject,
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

