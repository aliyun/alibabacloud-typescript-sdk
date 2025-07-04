// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMultiAccountResourceCountsResponseBodyResourceCounts extends $dara.Model {
  /**
   * @example
   * 2
   */
  count?: number;
  /**
   * @example
   * ACS::ECS::NetworkInterface
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      groupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

