// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FieldSpec extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the field can be analyzed, that is, whether it can be used as a dimension column in a GROUP BY clause.
   * 
   * @example
   * true
   */
  analysable?: boolean;
  /**
   * @remarks
   * The formatting method for numeric or display values, such as KMB (thousand/million/billion), percent, ms, or dthms (hours:minutes:seconds).
   * 
   * @example
   * KMB
   */
  dataFormat?: string;
  /**
   * @remarks
   * The business description of the field.
   * 
   * @example
   * The unique ID of the transaction order
   */
  description?: string;
  /**
   * @remarks
   * The display name used in the console. The value can contain Chinese characters.
   * 
   * @example
   * OrderNumber
   */
  displayName?: string;
  /**
   * @remarks
   * Specifies whether the field can be filtered, that is, whether index-based filter queries are supported.
   * 
   * @example
   * true
   */
  filterable?: boolean;
  /**
   * @remarks
   * The launch stage of the field. Valid values: preview, beta, ga, and deprecated.
   * 
   * @example
   * ga
   */
  launchStage?: string;
  /**
   * @remarks
   * The field name. The value must consist of lowercase letters, digits, hyphens (-), underscores (_), and periods (.).
   * 
   * @example
   * order_id
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether the field can be sorted.
   * 
   * @example
   * true
   */
  orderable?: boolean;
  /**
   * @remarks
   * The short description (one sentence) used in compact display scenarios such as lists.
   * 
   * @example
   * Order ID
   */
  shortDescription?: string;
  /**
   * @remarks
   * The field type. Valid values: string, integer, float, boolean, time, json_object, and json_array.
   * 
   * @example
   * string
   */
  type?: string;
  /**
   * @remarks
   * The unit of the field. The unit is used only for display purposes and is not automatically converted. For example, ms is not automatically converted to s.
   * 
   * @example
   * ms
   */
  unit?: string;
  /**
   * @remarks
   * The value mapping for enumerated values. The key is the raw value and the value is the mapped semantic name. This is used to display the business meaning of enumerated values. For example, the value 1 of the status field is mapped to running.
   */
  valueMapping?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      analysable: 'analysable',
      dataFormat: 'data_format',
      description: 'description',
      displayName: 'display_name',
      filterable: 'filterable',
      launchStage: 'launch_stage',
      name: 'name',
      orderable: 'orderable',
      shortDescription: 'short_description',
      type: 'type',
      unit: 'unit',
      valueMapping: 'value_mapping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysable: 'boolean',
      dataFormat: 'string',
      description: 'string',
      displayName: 'string',
      filterable: 'boolean',
      launchStage: 'string',
      name: 'string',
      orderable: 'boolean',
      shortDescription: 'string',
      type: 'string',
      unit: 'string',
      valueMapping: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.valueMapping) {
      $dara.Model.validateMap(this.valueMapping);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

