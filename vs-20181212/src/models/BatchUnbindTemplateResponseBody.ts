// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchUnbindTemplateResponseBodyBindings extends $dara.Model {
  /**
   * @remarks
   * The error message.
   * 
   * > This field appears only when the operation fails.
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
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: 'string',
      instanceId: 'string',
      instanceType: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of results.
   */
  bindings?: BatchUnbindTemplateResponseBodyBindings[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bindings: 'Bindings',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindings: { 'type': 'array', 'itemType': BatchUnbindTemplateResponseBodyBindings },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bindings)) {
      $dara.Model.validateArray(this.bindings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

