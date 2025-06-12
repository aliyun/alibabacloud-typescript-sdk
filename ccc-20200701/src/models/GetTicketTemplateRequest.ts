// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTicketTemplateRequest extends $dara.Model {
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
   * 4ca2e2-c8d19b82c-d7ce393ac8197d3ab
   */
  templateId?: string;
  /**
   * @example
   * 1703517780627
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      templateId: 'TemplateId',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      templateId: 'string',
      templateVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

