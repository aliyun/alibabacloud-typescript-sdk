// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClassificationTemplateResponseBodyClassificationResourceTemplateMap extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource. The supported resource type is INSTANCE. The resource ID corresponds to the value of InstanceId. You can call the [ListInstances](https://help.aliyun.com/document_detail/141936.html) operation to obtain the value of InstanceId.
   * 
   * @example
   * 24****
   */
  resourceId?: number;
  /**
   * @remarks
   * The resource type. The value is fixed as **INSTANCE**.
   * 
   * @example
   * INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the classification and grading template.
   * 
   * @example
   * 3***
   */
  templateId?: number;
  /**
   * @remarks
   * The type of the classification and grading template. Valid values:
   * 
   * *   **INNER**: a built-in template.
   * *   **USER_DEFINE**: a custom template.
   * 
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
  /**
   * @remarks
   * The information about the classification template that is associated to the instance.
   */
  classificationResourceTemplateMap?: GetClassificationTemplateResponseBodyClassificationResourceTemplateMap;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that is returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * 427688B8-ADFB-4C4E-9D45-EF5C1FD6E23D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
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

