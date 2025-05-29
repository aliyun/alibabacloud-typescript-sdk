// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchBindTemplatesResponseBodyResults extends $dara.Model {
  /**
   * @example
   * some error
   */
  error?: string;
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

