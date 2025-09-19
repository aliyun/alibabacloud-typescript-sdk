// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySearchConditionRequest extends $dara.Model {
  /**
   * @remarks
   * The filter condition. The value of this parameter is in the JSON format and is case-sensitive. The value contains the following fields:
   * 
   * *   **filterParams**: the filter-related parameters. The value is in the JSON format. Valid values:
   * 
   *     *   **label**: the display name of the filter condition in the console.
   * 
   *     *   **value**: the settings of the filter condition. The value is in the JSON format. The value contains the following fields:
   * 
   *         *   **name**: the name of the field for filtering. For more information, see the value description of name.
   *         *   **value**: the value of the field for filtering.
   * 
   * *   **LogicalExp**: the logical relationship among multiple filter conditions. Valid values:
   * 
   *     *   **OR**
   *     *   **AND**
   * 
   * >  Value description of **name**:
   * 
   * *   If **Type** is set to **ecs**, you can call the [DescribeCriteria](~~DescribeCriteria~~) operation to query the supported filter conditions.
   * 
   * *   If **Type** is set to **cloud_product**, you can call the [GetCloudAssetCriteria](~~GetCloudAssetCriteria~~) operation to query the supported filter conditions.
   * 
   * @example
   * {
   *     "filterParams": [
   *         {
   *             "label": "UUID：xxx",
   *             "value": "{\\"name\\":\\"uuidList\\",\\"value\\":\\"xxx\\"}"
   *         }
   *     ],
   *     "LogicalExp": "OR"
   * }
   */
  filterConditions?: string;
  /**
   * @remarks
   * The name of the common filter condition.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The source IP address of the request. You do not need to specify this parameter. It is automatically obtained by the system.
   * 
   * @example
   * 27.223.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The type of the asset. Default value: **ecs**. Valid values:
   * 
   * *   **ecs**: host
   * *   **cloud_product**: Alibaba Cloud service
   * 
   * @example
   * ecs
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      filterConditions: 'FilterConditions',
      name: 'Name',
      sourceIp: 'SourceIp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterConditions: 'string',
      name: 'string',
      sourceIp: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

