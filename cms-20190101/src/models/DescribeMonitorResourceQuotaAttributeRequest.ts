// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMonitorResourceQuotaAttributeRequest extends $dara.Model {
  regionId?: string;
  /**
   * @remarks
   * Specifies whether the response includes used quotas. Valid values:
   * - true (default): Included.
   * - false: Not included.
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

