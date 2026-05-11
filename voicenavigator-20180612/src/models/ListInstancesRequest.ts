// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesRequest extends $dara.Model {
  instanceIdListJsonString?: string;
  name?: string;
  /**
   * @example
   * [Managed]
   */
  nluServiceTypeListJsonString?: string;
  number?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  status?: string;
  unionInstanceId?: string;
  unionSource?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIdListJsonString: 'InstanceIdListJsonString',
      name: 'Name',
      nluServiceTypeListJsonString: 'NluServiceTypeListJsonString',
      number: 'Number',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
      unionInstanceId: 'UnionInstanceId',
      unionSource: 'UnionSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdListJsonString: 'string',
      name: 'string',
      nluServiceTypeListJsonString: 'string',
      number: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
      unionInstanceId: 'string',
      unionSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

