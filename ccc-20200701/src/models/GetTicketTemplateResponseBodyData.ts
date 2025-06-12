// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTicketTemplateResponseBodyDataTicketFields } from "./GetTicketTemplateResponseBodyDataTicketFields";


export class GetTicketTemplateResponseBodyData extends $dara.Model {
  /**
   * @example
   * 43c2671b-****-4223-86d0-6bd187905cc8
   */
  categoryId?: string;
  /**
   * @example
   * editor-xxx@ccc-test
   */
  editor?: string;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  name?: string;
  processDefinition?: string;
  /**
   * @example
   * Enabled
   */
  state?: string;
  /**
   * @example
   * 4ca2e2-c8d19b82c-d7ce393ac8197d3ab
   */
  templateId?: string;
  ticketFields?: GetTicketTemplateResponseBodyDataTicketFields[];
  /**
   * @example
   * 1717664210000
   */
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      editor: 'Editor',
      instanceId: 'InstanceId',
      name: 'Name',
      processDefinition: 'ProcessDefinition',
      state: 'State',
      templateId: 'TemplateId',
      ticketFields: 'TicketFields',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      editor: 'string',
      instanceId: 'string',
      name: 'string',
      processDefinition: 'string',
      state: 'string',
      templateId: 'string',
      ticketFields: { 'type': 'array', 'itemType': GetTicketTemplateResponseBodyDataTicketFields },
      updatedTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ticketFields)) {
      $dara.Model.validateArray(this.ticketFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

