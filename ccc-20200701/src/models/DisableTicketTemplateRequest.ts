// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableTicketTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * 43c2671b-8939-4223-86d0-6bd187905cc8_1717664210492
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

