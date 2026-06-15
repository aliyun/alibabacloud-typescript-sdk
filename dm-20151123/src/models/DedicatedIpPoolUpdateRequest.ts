// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DedicatedIpPoolUpdateRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the purchased IP instances. Separate multiple IDs with commas. Obtain these IDs from the response of the DedicatedIpNonePoolList operation.
   * 
   * @example
   * xxx,xxx
   */
  buyResourceIds?: string;
  /**
   * @remarks
   * The ID of the IP pool.
   * 
   * @example
   * xxx
   */
  id?: string;
  /**
   * @remarks
   * Specifies whether to change the associated IP addresses. Set this parameter to true.
   * 
   * @example
   * true
   */
  updateResource?: boolean;
  static names(): { [key: string]: string } {
    return {
      buyResourceIds: 'BuyResourceIds',
      id: 'Id',
      updateResource: 'UpdateResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyResourceIds: 'string',
      id: 'string',
      updateResource: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

