// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProjectFieldResponseBodyProjectFieldList extends $dara.Model {
  displayName?: string;
  /**
   * @example
   * b787ff504c0b36f8b71d15a4fd
   */
  identifier?: string;
  /**
   * @example
   * ace3wxxxxxxx7rff3ee
   */
  value?: string;
  /**
   * @example
   * user
   */
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'displayName',
      identifier: 'identifier',
      value: 'value',
      valueType: 'valueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      identifier: 'string',
      value: 'string',
      valueType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectFieldResponseBodyProject extends $dara.Model {
  /**
   * @example
   * Project
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
  description?: string;
  fieldList?: UpdateProjectFieldResponseBodyProjectFieldList[];
  /**
   * @example
   * 1623916393000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1684134690000
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
   * 66893
   */
  id?: string;
  /**
   * @example
   * 1e2ea73d24652d5874d001b351
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
  statusName?: string;
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
      fieldList: 'fieldList',
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
      statusName: 'statusName',
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
      fieldList: { 'type': 'array', 'itemType': UpdateProjectFieldResponseBodyProjectFieldList },
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
      statusName: 'string',
      statusStageIdentifier: 'string',
      subType: 'string',
      typeIdentifier: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fieldList)) {
      $dara.Model.validateArray(this.fieldList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectFieldResponseBody extends $dara.Model {
  /**
   * @example
   * Openapi.RequestError
   */
  errorCode?: string;
  /**
   * @example
   * errormessage
   */
  errorMessage?: string;
  project?: UpdateProjectFieldResponseBodyProject;
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  /**
   * @remarks
   * true/false
   * 
   * @example
   * True
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
      project: UpdateProjectFieldResponseBodyProject,
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

