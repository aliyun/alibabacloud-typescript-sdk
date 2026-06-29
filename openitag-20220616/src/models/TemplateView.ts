// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TemplateViewFieldsVisitInfo extends $dara.Model {
  /**
   * @remarks
   * Afts Configuration
   * 
   * @example
   * {"expiredTime":20}
   */
  aftsConf?: { [key: string]: any };
  /**
   * @remarks
   * OSS Configuration
   * 
   * @example
   * {"ossEndpoint":"***","ossAk":"***","ossAs":"***","ossOwner":"","ossBucket":""}
   */
  ossConf?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      aftsConf: 'AftsConf',
      ossConf: 'OssConf',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aftsConf: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      ossConf: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.aftsConf) {
      $dara.Model.validateMap(this.aftsConf);
    }
    if(this.ossConf) {
      $dara.Model.validateMap(this.ossConf);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateViewFields extends $dara.Model {
  /**
   * @remarks
   * Whether to Display Original Image
   * 
   * @example
   * true
   */
  displayOriImg?: boolean;
  /**
   * @remarks
   * Associated Column Name
   * 
   * @example
   * url
   */
  fieldName?: string;
  /**
   * @remarks
   * View Type
   * 
   * @example
   * IMG
   */
  type?: string;
  /**
   * @remarks
   * Access Information
   */
  visitInfo?: TemplateViewFieldsVisitInfo;
  static names(): { [key: string]: string } {
    return {
      displayOriImg: 'DisplayOriImg',
      fieldName: 'FieldName',
      type: 'Type',
      visitInfo: 'VisitInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayOriImg: 'boolean',
      fieldName: 'string',
      type: 'string',
      visitInfo: TemplateViewFieldsVisitInfo,
    };
  }

  validate() {
    if(this.visitInfo && typeof (this.visitInfo as any).validate === 'function') {
      (this.visitInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateView extends $dara.Model {
  /**
   * @remarks
   * View List
   */
  fields?: TemplateViewFields[];
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': TemplateViewFields },
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

