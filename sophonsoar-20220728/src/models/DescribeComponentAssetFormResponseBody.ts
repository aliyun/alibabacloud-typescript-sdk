// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComponentAssetFormResponseBody extends $dara.Model {
  /**
   * @remarks
   * The metadata of the asset in the component. The value is a JSON array and contains the following fields:
   * 
   * *   **name**: the parameter name.
   * *   **defaultValue**: the default parameter value.
   * *   **description**: the parameter description.
   * *   **required**: indicates whether the parameter is required. Valid values: **true** and **false**.
   * 
   * @example
   * [
   *     {
   *         "defaultValue": "",
   *         "description": "assetname",
   *         "name": "assetname",
   *         "required": true
   *     }
   * ]
   */
  componentAssetForm?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9D1651AC-31CC-5CC4-A14E-626B3FCC1022
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      componentAssetForm: 'ComponentAssetForm',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentAssetForm: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

