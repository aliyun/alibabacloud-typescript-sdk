// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTicketTemplateRequest extends $dara.Model {
  /**
   * @example
   * ef1e71e9-ae9d-487c-96ad-9181d85cf802
   */
  instanceId?: string;
  /**
   * @example
   * **43c2671b-8939-4223-***-6bd187905cc8_1717664210492
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

