// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTemplateScratchRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the scenario.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the scenario.
   * 
   * This parameter is required.
   * 
   * @example
   * ts-4f83704400994409****
   */
  templateScratchId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      templateScratchId: 'TemplateScratchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      templateScratchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

