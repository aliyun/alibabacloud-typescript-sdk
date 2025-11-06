// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveDomainGroupResponseBody extends $dara.Model {
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
   * 123456
   */
  domainGroupId?: number;
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
   * 80011ABC-F573-4795-B0E8-377BFBBA3422
   */
  requestId?: string;
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

