// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDomainResponseBodyDomainInfoListToolList extends $dara.Model {
  toolCode?: string;
  toolName?: string;
  static names(): { [key: string]: string } {
    return {
      toolCode: 'ToolCode',
      toolName: 'ToolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      toolCode: 'string',
      toolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainResponseBodyDomainInfoList extends $dara.Model {
  domainCode?: string;
  domainName?: string;
  toolCount?: number;
  toolList?: ListDomainResponseBodyDomainInfoListToolList[];
  static names(): { [key: string]: string } {
    return {
      domainCode: 'DomainCode',
      domainName: 'DomainName',
      toolCount: 'ToolCount',
      toolList: 'ToolList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainCode: 'string',
      domainName: 'string',
      toolCount: 'number',
      toolList: { 'type': 'array', 'itemType': ListDomainResponseBodyDomainInfoListToolList },
    };
  }

  validate() {
    if(Array.isArray(this.toolList)) {
      $dara.Model.validateArray(this.toolList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainResponseBody extends $dara.Model {
  domainInfoList?: ListDomainResponseBodyDomainInfoList[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domainInfoList: 'DomainInfoList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainInfoList: { 'type': 'array', 'itemType': ListDomainResponseBodyDomainInfoList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.domainInfoList)) {
      $dara.Model.validateArray(this.domainInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

