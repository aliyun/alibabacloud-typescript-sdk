// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnDomainLogsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  domainName?: string;
  endTime?: string;
  logDay?: string;
  ownerId?: string;
  pageNo?: number;
  pageSize?: number;
  resourceOwnerId?: string;
  resourceRealOwnerId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      logDay: 'LogDay',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerId: 'ResourceOwnerId',
      resourceRealOwnerId: 'ResourceRealOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      logDay: 'string',
      ownerId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerId: 'string',
      resourceRealOwnerId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

