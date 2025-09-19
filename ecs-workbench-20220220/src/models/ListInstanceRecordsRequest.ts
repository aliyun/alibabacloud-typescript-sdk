// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceRecordsRequest extends $dara.Model {
  /**
   * @example
   * i-xxx
   */
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

