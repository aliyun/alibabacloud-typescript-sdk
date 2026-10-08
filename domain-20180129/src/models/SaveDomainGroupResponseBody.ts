// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveDomainGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the group is being deleted.  
   * > For groups containing more than 1,000 domain names, deletion is an asynchronous procedure that requires some time for the system to process. During this period, this field is **true**.
   * 
   * @example
   * false
   */
  beingDeleted?: boolean;
  /**
   * @remarks
   * Creation Time of the domain name group.
   * 
   * @example
   * 2018-04-02 15:59:06
   */
  creationDate?: string;
  /**
   * @remarks
   * Domain group ID.
   * 
   * @example
   * 123456
   */
  domainGroupId?: number;
  /**
   * @remarks
   * Domain Name Group Name.
   * 
   * @example
   * 测试分组
   */
  domainGroupName?: string;
  /**
   * @remarks
   * Status of the domain name group. Valid values:  
   * - **PROCESSING**: Processing;  
   * - **COMPLETE**: Complete.  
   * 
   * > In cases such as setting a group via a file or replacing a group with more than 1,000 domain names, the operation is asynchronous and requires waiting for system processing. During this time, this field is **PROCESSING**.
   * 
   * @example
   * COMPLETE
   */
  domainGroupStatus?: string;
  /**
   * @remarks
   * Updated At time of the domain name group.
   * 
   * @example
   * 2018-04-02 15:59:06
   */
  modificationDate?: string;
  /**
   * @remarks
   * Unique request identity.
   * 
   * @example
   * 80011ABC-F573-4795-B0E8-377BFBBA3422
   */
  requestId?: string;
  /**
   * @remarks
   * Quantity of domain names.
   * 
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
      requestId: 'RequestId',
      totalNumber: 'TotalNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beingDeleted: 'boolean',
      creationDate: 'string',
      domainGroupId: 'number',
      domainGroupName: 'string',
      domainGroupStatus: 'string',
      modificationDate: 'string',
      requestId: 'string',
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

