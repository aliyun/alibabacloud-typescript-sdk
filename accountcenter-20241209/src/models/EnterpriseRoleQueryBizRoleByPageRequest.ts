// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseRoleQueryBizRoleByPageRequest extends $dara.Model {
  encryptTicket?: string;
  maxResults?: number;
  nextToken?: string;
  orientedEcId?: string;
  orientedLeId?: string;
  orientedNbId?: string;
  pageNo?: number;
  pageSize?: number;
  query?: string;
  resourceType?: string;
  srcType?: string;
  static names(): { [key: string]: string } {
    return {
      encryptTicket: 'EncryptTicket',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orientedEcId: 'OrientedEcId',
      orientedLeId: 'OrientedLeId',
      orientedNbId: 'OrientedNbId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      query: 'Query',
      resourceType: 'ResourceType',
      srcType: 'SrcType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptTicket: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orientedEcId: 'string',
      orientedLeId: 'string',
      orientedNbId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      query: 'string',
      resourceType: 'string',
      srcType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

