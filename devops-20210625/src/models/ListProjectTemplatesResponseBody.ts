// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectTemplatesResponseBodyTemplates extends $dara.Model {
  /**
   * @example
   * null
   */
  copyFrom?: string;
  /**
   * @example
   * 19xx7043xxxxxxx914
   */
  creator?: string;
  /**
   * @example
   * 迭代的具体信息
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
   * https://img.xxxx.png
   */
  icon?: string;
  /**
   * @example
   * e8bxxxxxxxxxxxxxxxx23
   */
  identifier?: string;
  /**
   * @example
   * 19xx7043xxxxxxx914
   */
  modifier?: string;
  /**
   * @example
   * 专用模板
   */
  name?: string;
  /**
   * @example
   * Test Template
   */
  nameEn?: string;
  /**
   * @example
   * Project
   */
  resourceCategory?: string;
  /**
   * @example
   * null
   */
  resourceType?: string;
  /**
   * @example
   * null
   */
  spaceIdentifier?: string;
  /**
   * @example
   * null
   */
  spaceType?: string;
  /**
   * @example
   * 4
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      copyFrom: 'copyFrom',
      creator: 'creator',
      description: 'description',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      icon: 'icon',
      identifier: 'identifier',
      modifier: 'modifier',
      name: 'name',
      nameEn: 'nameEn',
      resourceCategory: 'resourceCategory',
      resourceType: 'resourceType',
      spaceIdentifier: 'spaceIdentifier',
      spaceType: 'spaceType',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      copyFrom: 'string',
      creator: 'string',
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      icon: 'string',
      identifier: 'string',
      modifier: 'string',
      name: 'string',
      nameEn: 'string',
      resourceCategory: 'string',
      resourceType: 'string',
      spaceIdentifier: 'string',
      spaceType: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectTemplatesResponseBody extends $dara.Model {
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
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  templates?: ListProjectTemplatesResponseBodyTemplates[];
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      requestId: 'requestId',
      success: 'success',
      templates: 'templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
      templates: { 'type': 'array', 'itemType': ListProjectTemplatesResponseBodyTemplates },
    };
  }

  validate() {
    if(Array.isArray(this.templates)) {
      $dara.Model.validateArray(this.templates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

