// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMonitorResourceQuotaAttributeRequest extends $dara.Model {
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to return information about used quotas. Valid values:
   * 
   * *   true (default): yes
   * *   false: no
   * 
   * @example
   * true
   */
  showUsed?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      showUsed: 'ShowUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      showUsed: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

