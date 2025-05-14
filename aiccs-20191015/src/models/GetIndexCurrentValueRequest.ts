// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIndexCurrentValueRequest extends $dara.Model {
  /**
   * @example
   * 2332****,2334****
   */
  depIds?: string;
  /**
   * @example
   * 2323****,2324****
   */
  groupIds?: string;
  /**
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      depIds: 'DepIds',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depIds: 'string',
      groupIds: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

