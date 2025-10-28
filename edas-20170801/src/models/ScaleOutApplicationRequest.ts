// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScaleOutApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application that you want to scale out. You can call the ListApplication operation to query the application ID. For more information, see [ListApplication](https://help.aliyun.com/document_detail/149390.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 3616cdca-4f92-4413*****************
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the instance group where the application you want to scale out is deployed. You can call the QueryApplicationStatus operation to query the group ID. For more information, see [QueryApplicationStatus](https://help.aliyun.com/document_detail/149394.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 4f1fb6f5-6769-4bd6******************
   */
  deployGroup?: string;
  /**
   * @remarks
   * The ID of the elastic compute unit (ECU) that corresponds to the Elastic Compute Service (ECS) instance to be added to the instance group for scale-out. You can call the ListScaleOutEcu operation to query the ECU ID. For more information, see [ListScaleOutEcu](https://help.aliyun.com/document_detail/149371.html). Separate multiple ECU IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 8123db90-880f-486f-b***************
   */
  ecuInfo?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      deployGroup: 'DeployGroup',
      ecuInfo: 'EcuInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      deployGroup: 'string',
      ecuInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

