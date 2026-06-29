// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ViewPluginVisitInfo extends $dara.Model {
  /**
   * @remarks
   * AFTS configuration.
   * 
   * @example
   * {"expiredTime":1}
   */
  aftsConf?: { [key: string]: any };
  /**
   * @remarks
   * OSS configuration.
   * 
   * @example
   * {"ossEndpoint":"","ossAk":"","ossAs":"","ossOwner":"","ossBucket":"","folder":"","expiredTime":""}
   */
  ossConf?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      aftsConf: 'aftsConf',
      ossConf: 'ossConf',
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

export class ViewPlugin extends $dara.Model {
  /**
   * @remarks
   * Field mapping to a field in the dataset.
   * 
   * This parameter is required.
   * 
   * @example
   * url
   */
  bindField?: string;
  /**
   * @remarks
   * Array transformation UDF.
   * 
   * @example
   * null
   */
  convertor?: string;
  /**
   * @remarks
   * Whether to handle cross-domain requests.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  corsProxy?: boolean;
  /**
   * @remarks
   * Whether to display the original image.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  displayOriImg?: boolean;
  /**
   * @remarks
   * Extra information.
   * 
   * @example
   * {}
   */
  exif?: { [key: string]: any };
  /**
   * @remarks
   * Whether to hide.
   * 
   * @example
   * true
   */
  hide?: boolean;
  /**
   * @remarks
   * Nested widgets.
   * 
   * @example
   * []
   */
  plugins?: { [key: string]: any };
  /**
   * @remarks
   * List of associated questions.
   */
  relationQuestionIds?: string[];
  /**
   * @remarks
   * Widget type. Valid values:
   * - Image: Image.
   * - Text: Text.
   * - Video: Video.
   * - Audio: Audio.
   * 
   * This parameter is required.
   * 
   * @example
   * Text
   */
  type?: string;
  /**
   * @remarks
   * Access information.
   */
  visitInfo?: ViewPluginVisitInfo;
  static names(): { [key: string]: string } {
    return {
      bindField: 'BindField',
      convertor: 'Convertor',
      corsProxy: 'CorsProxy',
      displayOriImg: 'DisplayOriImg',
      exif: 'Exif',
      hide: 'Hide',
      plugins: 'Plugins',
      relationQuestionIds: 'RelationQuestionIds',
      type: 'Type',
      visitInfo: 'VisitInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindField: 'string',
      convertor: 'string',
      corsProxy: 'boolean',
      displayOriImg: 'boolean',
      exif: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      hide: 'boolean',
      plugins: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      relationQuestionIds: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
      visitInfo: ViewPluginVisitInfo,
    };
  }

  validate() {
    if(this.exif) {
      $dara.Model.validateMap(this.exif);
    }
    if(this.plugins) {
      $dara.Model.validateMap(this.plugins);
    }
    if(Array.isArray(this.relationQuestionIds)) {
      $dara.Model.validateArray(this.relationQuestionIds);
    }
    if(this.visitInfo && typeof (this.visitInfo as any).validate === 'function') {
      (this.visitInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

