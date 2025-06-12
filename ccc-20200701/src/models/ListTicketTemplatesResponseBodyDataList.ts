// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTicketTemplatesResponseBodyDataListTicketFields } from "./ListTicketTemplatesResponseBodyDataListTicketFields";


export class ListTicketTemplatesResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 0
   */
  appliedVersion?: string;
  /**
   * @example
   * 43c2671b-*****-4223-86d0-6bd187905cc8
   */
  categoryId?: string;
  /**
   * @example
   * creator@ccc-test
   */
  editor?: string;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * 1715780670000
   */
  latestVersion?: string;
  name?: string;
  processDefinition?: string;
  /**
   * @example
   * Enabled
   */
  state?: string;
  /**
   * @example
   * b5c21219-3a1e-4bc0-92e7-da66e057d2f6
   */
  templateId?: string;
  ticketFields?: ListTicketTemplatesResponseBodyDataListTicketFields[];
  /**
   * @example
   * 1715780670000
   */
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      appliedVersion: 'AppliedVersion',
      categoryId: 'CategoryId',
      editor: 'Editor',
      instanceId: 'InstanceId',
      latestVersion: 'LatestVersion',
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
      appliedVersion: 'string',
      categoryId: 'string',
      editor: 'string',
      instanceId: 'string',
      latestVersion: 'string',
      name: 'string',
      processDefinition: 'string',
      state: 'string',
      templateId: 'string',
      ticketFields: { 'type': 'array', 'itemType': ListTicketTemplatesResponseBodyDataListTicketFields },
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

