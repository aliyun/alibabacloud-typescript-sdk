// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatbotInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  nluServiceParamsJson?: string;
  nluServiceType?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  unionSource?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nluServiceParamsJson: 'NluServiceParamsJson',
      nluServiceType: 'NluServiceType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      unionSource: 'UnionSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nluServiceParamsJson: 'string',
      nluServiceType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

