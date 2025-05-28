// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDatasetInfoResponseBodyResultMeasureList extends $dara.Model {
  /**
   * @remarks
   * The actual physical field.
   * 
   * @example
   * profit_amt
   */
  caption?: string;
  /**
   * @remarks
   * A list of all measures for the dataset.
   * 
   * @example
   * string
   */
  dataType?: string;
  /**
   * @remarks
   * Data type; value:
   * 
   * *   string: character
   * *   number: a number
   * *   datetime: time
   * 
   * @example
   * example_expression
   */
  expression?: string;
  /**
   * **if can be null:**
   * true
   */
  expressionV2?: string;
  /**
   * @remarks
   * The type of the measure. Valid values:
   * 
   * *   standard_measure: General Metrics
   * *   calculate_measure: Calculating Measures
   * 
   * @example
   * profit_amt
   */
  factColumn?: string;
  /**
   * @example
   * hhhh
   */
  fieldDescription?: string;
  /**
   * @remarks
   * An expression that calculates a measure; valid only for calculated measures.
   * 
   * @example
   * calculate_measure
   */
  measureType?: string;
  /**
   * @remarks
   * The display name of the metric.
   * 
   * @example
   * 7a62530b36
   */
  tableUniqueId?: string;
  /**
   * @remarks
   * The unique ID of the table to which the table belongs, which corresponds to the UniqueId of the CubeTypeList.
   * 
   * @example
   * 88b680****
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      caption: 'Caption',
      dataType: 'DataType',
      expression: 'Expression',
      expressionV2: 'ExpressionV2',
      factColumn: 'FactColumn',
      fieldDescription: 'FieldDescription',
      measureType: 'MeasureType',
      tableUniqueId: 'TableUniqueId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caption: 'string',
      dataType: 'string',
      expression: 'string',
      expressionV2: 'string',
      factColumn: 'string',
      fieldDescription: 'string',
      measureType: 'string',
      tableUniqueId: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

