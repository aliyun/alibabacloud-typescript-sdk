// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchEventsResponseBodyPageBeanEvent extends $dara.Model {
  alertId?: number;
  alertName?: string;
  alertRule?: string;
  alertType?: number;
  eventLevel?: string;
  eventTime?: number;
  id?: number;
  links?: string[];
  message?: string;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      alertName: 'AlertName',
      alertRule: 'AlertRule',
      alertType: 'AlertType',
      eventLevel: 'EventLevel',
      eventTime: 'EventTime',
      id: 'Id',
      links: 'Links',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      alertName: 'string',
      alertRule: 'string',
      alertType: 'number',
      eventLevel: 'string',
      eventTime: 'number',
      id: 'number',
      links: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.links)) {
      $dara.Model.validateArray(this.links);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEventsResponseBodyPageBean extends $dara.Model {
  event?: SearchEventsResponseBodyPageBeanEvent[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      event: 'Event',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: { 'type': 'array', 'itemType': SearchEventsResponseBodyPageBeanEvent },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.event)) {
      $dara.Model.validateArray(this.event);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEventsResponseBody extends $dara.Model {
  isTrigger?: number;
  pageBean?: SearchEventsResponseBodyPageBean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isTrigger: 'IsTrigger',
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTrigger: 'number',
      pageBean: SearchEventsResponseBodyPageBean,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageBean && typeof (this.pageBean as any).validate === 'function') {
      (this.pageBean as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

