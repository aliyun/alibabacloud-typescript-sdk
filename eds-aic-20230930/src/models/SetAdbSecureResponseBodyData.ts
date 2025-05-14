// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAdbSecureResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of the cloud phone instances for which the ADB authentication feature failed to be enabled.
   * 
   * @example
   * 0
   */
  failCount?: number;
  /**
   * @remarks
   * The IDs of the cloud phone instances for which the ADB authentication feature is enabled.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The total number of the cloud phone instances.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      failCount: 'FailCount',
      instanceIds: 'InstanceIds',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failCount: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

