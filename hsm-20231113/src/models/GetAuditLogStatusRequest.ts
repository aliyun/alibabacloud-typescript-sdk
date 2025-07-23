// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuditLogStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to obtain the list of OSS buckets that can be used to store audit logs. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  getOssBucket?: boolean;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      getOssBucket: 'GetOssBucket',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      getOssBucket: 'boolean',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

