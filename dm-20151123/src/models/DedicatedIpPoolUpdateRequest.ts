// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DedicatedIpPoolUpdateRequest extends $dara.Model {
  /**
   * @remarks
   * Purchased IP instance IDs, separated by commas; sourced from the DedicatedIpNonePoolList API\\"s returned IP purchase instance IDs
   * 
   * @example
   * xxx,xxx
   */
  buyResourceIds?: string;
  /**
   * @remarks
   * IP pool ID
   * 
   * @example
   * xxx
   */
  id?: string;
  /**
   * @remarks
   * Whether to change the associated IP, enter true
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

