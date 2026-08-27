// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateScratchRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the resource scenario.
   * 
   * You can call [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The data display option. Valid values:
   * 
   * - Sources: displays only source node data. This value is applicable when TemplateScratchType is set to ArchitectureDetection.
   * 
   * - Source: displays only source node data. This value is applicable when TemplateScratchType is not set to ArchitectureDetection.
   * 
   * - Provisions: displays only new node data. This value is applicable when TemplateScratchType is not set to ArchitectureDetection.
   * 
   * - All: displays all data.
   * 
   * For more information about source nodes and new nodes, see [Overview](https://help.aliyun.com/document_detail/352074.html).
   * 
   * > If you do not specify this parameter, node data is not displayed by default.
   * 
   * @example
   * Source
   */
  showDataOption?: string;
  /**
   * @remarks
   * The ID of the resource scenario.
   * 
   * @example
   * ts-7f7a704cf71c49a6****
   */
  templateScratchId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      showDataOption: 'ShowDataOption',
      templateScratchId: 'TemplateScratchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      showDataOption: 'string',
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

