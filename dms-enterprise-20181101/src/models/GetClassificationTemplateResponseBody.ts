// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClassificationTemplateResponseBodyClassificationResourceTemplateMap extends $dara.Model {
  /**
   * @example
   * 24****
   */
  resourceId?: number;
  /**
   * @example
   * INSTANCE
   */
  resourceType?: string;
  /**
   * @example
   * 3***
   */
  templateId?: number;
  /**
   * @example
   * INNER
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'number',
      resourceType: 'string',
      templateId: 'number',
      templateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClassificationTemplateResponseBody extends $dara.Model {
  classificationResourceTemplateMap?: GetClassificationTemplateResponseBodyClassificationResourceTemplateMap;
  /**
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @example
   * 427688B8-ADFB-4C4E-9D45-EF5C1FD6E23D
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      classificationResourceTemplateMap: 'ClassificationResourceTemplateMap',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classificationResourceTemplateMap: GetClassificationTemplateResponseBodyClassificationResourceTemplateMap,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.classificationResourceTemplateMap && typeof (this.classificationResourceTemplateMap as any).validate === 'function') {
      (this.classificationResourceTemplateMap as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

