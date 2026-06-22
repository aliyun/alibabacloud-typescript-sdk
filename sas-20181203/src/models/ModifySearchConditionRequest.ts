// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySearchConditionRequest extends $dara.Model {
  /**
   * @remarks
   * The filter conditions. This parameter is in JSON format. Pay attention to the letter case when you specify this parameter. The following fields are included:
   * 
   * - **filterParams**: The filter parameters. This parameter is in JSON format. The following fields are included:
   *   - **label**: The display name for the search in the console.
   *   - **value**: The filter parameter condition. This parameter is in JSON format. The following fields are included:
   * 
   *      - **name**: The filter condition field. For more information about the valid values of this field, see the description below.
   *      - **value**: The value that corresponds to the filter condition field.
   * 
   * - **LogicalExp**: The logical relationship between multiple filter conditions. Valid values:
   *   - **OR**: or
   *   - **AND**: and
   * > Valid values of **name**:
   * > - If **Type** is set to **ecs**, call the [DescribeCriteria](~~DescribeCriteria~~) operation to query the supported search conditions.
   * > - If **Type** is set to **cloud_product**, call the [GetCloudAssetCriteria](~~GetCloudAssetCriteria~~) operation to query the supported search conditions.
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
   * The source IP address of the request. You do not need to specify this parameter. The system automatically obtains the value.
   * 
   * @example
   * 27.223.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The asset type. Default value: **ecs**. Valid values:
   * - **ecs**: host asset
   * - **cloud_product**: cloud service.
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

