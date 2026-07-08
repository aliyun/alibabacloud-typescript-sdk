// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchTranslateForHtmlRequestExtConfig extends $dara.Model {
  skipCsiCheck?: boolean;
  static names(): { [key: string]: string } {
    return {
      skipCsiCheck: 'skipCsiCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skipCsiCheck: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchTranslateForHtmlRequestExtExamples extends $dara.Model {
  src?: string;
  tgt?: string;
  static names(): { [key: string]: string } {
    return {
      src: 'src',
      tgt: 'tgt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      src: 'string',
      tgt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchTranslateForHtmlRequestExtTerminologies extends $dara.Model {
  src?: string;
  tgt?: string;
  static names(): { [key: string]: string } {
    return {
      src: 'src',
      tgt: 'tgt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      src: 'string',
      tgt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchTranslateForHtmlRequestExtTextTransform extends $dara.Model {
  toLower?: boolean;
  toTitle?: boolean;
  toUpper?: boolean;
  static names(): { [key: string]: string } {
    return {
      toLower: 'toLower',
      toTitle: 'toTitle',
      toUpper: 'toUpper',
    };
  }

  static types(): { [key: string]: any } {
    return {
      toLower: 'boolean',
      toTitle: 'boolean',
      toUpper: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchTranslateForHtmlRequestExt extends $dara.Model {
  config?: BatchTranslateForHtmlRequestExtConfig;
  domainHint?: string;
  examples?: BatchTranslateForHtmlRequestExtExamples[];
  langDetect?: boolean;
  sensitives?: string[];
  terminologies?: BatchTranslateForHtmlRequestExtTerminologies[];
  textTransform?: BatchTranslateForHtmlRequestExtTextTransform;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      domainHint: 'domainHint',
      examples: 'examples',
      langDetect: 'langDetect',
      sensitives: 'sensitives',
      terminologies: 'terminologies',
      textTransform: 'textTransform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: BatchTranslateForHtmlRequestExtConfig,
      domainHint: 'string',
      examples: { 'type': 'array', 'itemType': BatchTranslateForHtmlRequestExtExamples },
      langDetect: 'boolean',
      sensitives: { 'type': 'array', 'itemType': 'string' },
      terminologies: { 'type': 'array', 'itemType': BatchTranslateForHtmlRequestExtTerminologies },
      textTransform: BatchTranslateForHtmlRequestExtTextTransform,
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(Array.isArray(this.examples)) {
      $dara.Model.validateArray(this.examples);
    }
    if(Array.isArray(this.sensitives)) {
      $dara.Model.validateArray(this.sensitives);
    }
    if(Array.isArray(this.terminologies)) {
      $dara.Model.validateArray(this.terminologies);
    }
    if(this.textTransform && typeof (this.textTransform as any).validate === 'function') {
      (this.textTransform as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchTranslateForHtmlRequest extends $dara.Model {
  appName?: string;
  ext?: BatchTranslateForHtmlRequestExt;
  format?: string;
  scene?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  targetLanguage?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  text?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'appName',
      ext: 'ext',
      format: 'format',
      scene: 'scene',
      sourceLanguage: 'sourceLanguage',
      targetLanguage: 'targetLanguage',
      text: 'text',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      ext: BatchTranslateForHtmlRequestExt,
      format: 'string',
      scene: 'string',
      sourceLanguage: 'string',
      targetLanguage: 'string',
      text: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.ext && typeof (this.ext as any).validate === 'function') {
      (this.ext as any).validate();
    }
    if(this.text) {
      $dara.Model.validateMap(this.text);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

