// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroups } from "./DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroups";


export class DescribeDedicatedHostGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about dedicated clusters returned.
   */
  dedicatedHostGroups?: DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroups;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AB44DC0A-7E77-442A-97A9-C6418694CB22
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostGroups: 'DedicatedHostGroups',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostGroups: DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroups,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dedicatedHostGroups && typeof (this.dedicatedHostGroups as any).validate === 'function') {
      (this.dedicatedHostGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

