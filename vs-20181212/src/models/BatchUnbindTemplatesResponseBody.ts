// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchUnbindTemplatesResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The error message.
   * 
   * > Appears only if the operation fails.
   * 
   * @example
   * some error
   */
  error?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 323*****994-cn-qingdao
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * group
   */
  instanceType?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * 323*****998-cn-qingdao
   */
  templateId?: string;
  /**
   * @remarks
   * The template type.
   * 
   * @example
   * snapshot
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: 'string',
      instanceId: 'string',
      instanceType: 'string',
      templateId: 'string',
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

export class BatchUnbindTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90B377DF-C874-5BBD-B957-42C4C06AFECE
   */
  requestId?: string;
  /**
   * @remarks
   * The list of results.
   */
  results?: BatchUnbindTemplatesResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': BatchUnbindTemplatesResponseBodyResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

