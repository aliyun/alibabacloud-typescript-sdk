// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchBindTemplatesResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The error message.
   * 
   * > This parameter is returned only when the operation fails.
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

export class BatchBindTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20D0DFCE-5DB7-5D83-BD82-8482F2327636
   */
  requestId?: string;
  /**
   * @remarks
   * A list of results.
   */
  results?: BatchBindTemplatesResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': BatchBindTemplatesResponseBodyResults },
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

