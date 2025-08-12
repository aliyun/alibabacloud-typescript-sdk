// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteHybridMonitorSLSGroupRequest extends $dara.Model {
  regionId?: string;
  /**
   * @remarks
   * The name of the Logstore group.
   * 
   * For information about how to obtain the name of a Logstore group, see [DescribeHybridMonitorSLSGroup](https://help.aliyun.com/document_detail/429526.html).
   * 
   * This parameter is required.
   * 
   * @example
   * Logstore_test
   */
  SLSGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      SLSGroupName: 'SLSGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      SLSGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

