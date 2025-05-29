// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * 323*****994-cn-qingdao
   */
  instanceId?: string;
  /**
   * @example
   * group
   */
  instanceType?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 323*****998-cn-qingdao
   */
  templateId?: string;
  /**
   * @example
   * record
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      requestId: 'RequestId',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceType: 'string',
      requestId: 'string',
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

