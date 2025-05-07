// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecurityEventDetailResponseBodyData extends $dara.Model {
  aliuid?: string;
  dataSource?: string;
  eventCode?: string;
  eventId?: string;
  eventTime?: string;
  extra?: string;
  level?: string;
  principalId?: string;
  resourceId?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliuid: 'Aliuid',
      dataSource: 'DataSource',
      eventCode: 'EventCode',
      eventId: 'EventId',
      eventTime: 'EventTime',
      extra: 'Extra',
      level: 'Level',
      principalId: 'PrincipalId',
      resourceId: 'ResourceId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliuid: 'string',
      dataSource: 'string',
      eventCode: 'string',
      eventId: 'string',
      eventTime: 'string',
      extra: 'string',
      level: 'string',
      principalId: 'string',
      resourceId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

