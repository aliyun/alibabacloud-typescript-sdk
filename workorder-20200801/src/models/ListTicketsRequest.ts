// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTicketsRequestExtraConditionList extends $dara.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsRequest extends $dara.Model {
  createdAfterTime?: string;
  createdBeforeTime?: string;
  extraConditionList?: ListTicketsRequestExtraConditionList[];
  ids?: string;
  pageSize?: number;
  pageStart?: number;
  productCode?: string;
  ticketStatus?: string;
  static names(): { [key: string]: string } {
    return {
      createdAfterTime: 'CreatedAfterTime',
      createdBeforeTime: 'CreatedBeforeTime',
      extraConditionList: 'ExtraConditionList',
      ids: 'Ids',
      pageSize: 'PageSize',
      pageStart: 'PageStart',
      productCode: 'ProductCode',
      ticketStatus: 'TicketStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAfterTime: 'string',
      createdBeforeTime: 'string',
      extraConditionList: { 'type': 'array', 'itemType': ListTicketsRequestExtraConditionList },
      ids: 'string',
      pageSize: 'number',
      pageStart: 'number',
      productCode: 'string',
      ticketStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.extraConditionList)) {
      $dara.Model.validateArray(this.extraConditionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

