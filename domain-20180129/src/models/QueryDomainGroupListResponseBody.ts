// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDomainGroupListResponseBodyDataDomainGroup extends $dara.Model {
  /**
   * @example
   * false
   */
  beingDeleted?: boolean;
  /**
   * @example
   * 2018-04-02 15:59:06
   */
  creationDate?: string;
  /**
   * @example
   * -1
   */
  domainGroupId?: string;
  domainGroupName?: string;
  /**
   * @example
   * COMPLETE
   */
  domainGroupStatus?: string;
  /**
   * @example
   * 2018-04-02 15:59:06
   */
  modificationDate?: string;
  /**
   * @example
   * 20
   */
  totalNumber?: number;
  static names(): { [key: string]: string } {
    return {
      beingDeleted: 'BeingDeleted',
      creationDate: 'CreationDate',
      domainGroupId: 'DomainGroupId',
      domainGroupName: 'DomainGroupName',
      domainGroupStatus: 'DomainGroupStatus',
      modificationDate: 'ModificationDate',
      totalNumber: 'TotalNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beingDeleted: 'boolean',
      creationDate: 'string',
      domainGroupId: 'string',
      domainGroupName: 'string',
      domainGroupStatus: 'string',
      modificationDate: 'string',
      totalNumber: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainGroupListResponseBodyData extends $dara.Model {
  domainGroup?: QueryDomainGroupListResponseBodyDataDomainGroup[];
  static names(): { [key: string]: string } {
    return {
      domainGroup: 'DomainGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainGroup: { 'type': 'array', 'itemType': QueryDomainGroupListResponseBodyDataDomainGroup },
    };
  }

  validate() {
    if(Array.isArray(this.domainGroup)) {
      $dara.Model.validateArray(this.domainGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainGroupListResponseBody extends $dara.Model {
  data?: QueryDomainGroupListResponseBodyData;
  /**
   * @example
   * 80011ABC-F573-4795-B0E8-377BFBBA3422
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryDomainGroupListResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

