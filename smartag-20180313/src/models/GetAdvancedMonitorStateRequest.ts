// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAdvancedMonitorStateRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the SAG instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/69813.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the SAG instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-asdfz6ac74oj5v****
   */
  sagId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      sagId: 'SagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      sagId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

