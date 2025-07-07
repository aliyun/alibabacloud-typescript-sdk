// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseRoleQueryAccountForRoleGrantByPageRequest extends $dara.Model {
  bizRoleCode?: string;
  encryptTicket?: string;
  maxResults?: number;
  nextToken?: string;
  orgId?: string;
  orientedEcId?: string;
  orientedLeId?: string;
  orientedNbId?: string;
  pageNo?: number;
  pageSize?: number;
  query?: string;
  showCompleteInfo?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizRoleCode: 'BizRoleCode',
      encryptTicket: 'EncryptTicket',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orgId: 'OrgId',
      orientedEcId: 'OrientedEcId',
      orientedLeId: 'OrientedLeId',
      orientedNbId: 'OrientedNbId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      query: 'Query',
      showCompleteInfo: 'ShowCompleteInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRoleCode: 'string',
      encryptTicket: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orgId: 'string',
      orientedEcId: 'string',
      orientedLeId: 'string',
      orientedNbId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      query: 'string',
      showCompleteInfo: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

