// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSDGResponseBodySDGsAvaliableRegionIds } from "./DescribeSdgresponseBodySdgsAvaliableRegionIds";
import { DescribeSDGResponseBodySDGsPreloadInfos } from "./DescribeSdgresponseBodySdgsPreloadInfos";


export class DescribeSDGResponseBodySDGs extends $dara.Model {
  /**
   * @remarks
   * SDGs that have snapshots.
   */
  avaliableRegionIds?: DescribeSDGResponseBodySDGsAvaliableRegionIds[];
  /**
   * @remarks
   * The ID of the instance on which the SDG is created.
   * 
   * @example
   * aic-5x20dyeos****
   */
  creationInstanceId?: string;
  /**
   * @remarks
   * The ID of the node on which the SDG is created.
   * 
   * @example
   * cn-hangzhou-26
   */
  creationRegionId?: string;
  /**
   * @remarks
   * The time when the first SDG in the node was created.
   * 
   * @example
   * 2023-02-27 15:07:21
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the SDG.
   * 
   * @example
   * Testing SDGs
   */
  description?: string;
  /**
   * @remarks
   * The ID of the source SDG from which you want to create an SDG. The value of this parameter is the value of the **FromSDGId** parameter that you need to specify when you call the [CreateSDG](https://help.aliyun.com/document_detail/608128.html) operation.
   * 
   * @example
   * sdg-xxxxx
   */
  parentSDGId?: string;
  /**
   * @remarks
   * The preload information.
   */
  preloadInfos?: DescribeSDGResponseBodySDGsPreloadInfos[];
  /**
   * @remarks
   * The ID of the SDG.
   * 
   * @example
   * sdg-30e1fdba7196bc****
   */
  SDGId?: string;
  /**
   * @remarks
   * The size of the SDG. Unit: GB.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * The status of the SDG creation. Valid values:
   * 
   * *   **sdg_making**
   * *   **sdg_saving**
   * *   **failed**
   * *   **success**
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The time when the SDG was last updated.
   * 
   * @example
   * 2023-02-27 16:04:39
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      avaliableRegionIds: 'AvaliableRegionIds',
      creationInstanceId: 'CreationInstanceId',
      creationRegionId: 'CreationRegionId',
      creationTime: 'CreationTime',
      description: 'Description',
      parentSDGId: 'ParentSDGId',
      preloadInfos: 'PreloadInfos',
      SDGId: 'SDGId',
      size: 'Size',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avaliableRegionIds: { 'type': 'array', 'itemType': DescribeSDGResponseBodySDGsAvaliableRegionIds },
      creationInstanceId: 'string',
      creationRegionId: 'string',
      creationTime: 'string',
      description: 'string',
      parentSDGId: 'string',
      preloadInfos: { 'type': 'array', 'itemType': DescribeSDGResponseBodySDGsPreloadInfos },
      SDGId: 'string',
      size: 'number',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.avaliableRegionIds)) {
      $dara.Model.validateArray(this.avaliableRegionIds);
    }
    if(Array.isArray(this.preloadInfos)) {
      $dara.Model.validateArray(this.preloadInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

