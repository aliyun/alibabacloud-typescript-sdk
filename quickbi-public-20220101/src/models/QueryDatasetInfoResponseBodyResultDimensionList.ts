// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDatasetInfoResponseBodyResultDimensionList extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the field that is referenced by the group measure. Non-NULL if and only if the metric is a grouping metric.
   * 
   * @example
   * city
   */
  caption?: string;
  /**
   * @remarks
   * A list of all dimensions in the dataset.
   * 
   * @example
   * string
   */
  dataType?: string;
  /**
   * @remarks
   * The actual physical field.
   * 
   * @example
   * group_dimension
   */
  dimensionType?: string;
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
   * @remarks
   * Expression for the flattened calculation dimensions.
   * 
   * @example
   * example_expression
   * 
   * **if can be null:**
   * true
   */
  expressionV2?: string;
  /**
   * @remarks
   * Expression for a calculated dimension; valid only for calculated dimensions.
   * 
   * @example
   * city
   */
  factColumn?: string;
  /**
   * @remarks
   * The description of the field.
   * 
   * @example
   * hhhh
   */
  fieldDescription?: string;
  /**
   * @remarks
   * The type of the dimension. Valid values:
   * 
   * *   standard_dimension: General Dimension
   * *   calculate_dimension: calculating dimensions
   * *   group_dimension: grouping dimensions
   * 
   * @example
   * example_granularity
   */
  granularity?: string;
  /**
   * @remarks
   * The granularity.
   * 
   * @example
   * 308f7****
   */
  refUid?: string;
  /**
   * @remarks
   * The ARN.
   * 
   * @example
   * 7a62530***
   */
  tableUniqueId?: string;
  /**
   * @remarks
   * The display name of the dimension.
   * 
   * @example
   * a69774***
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      caption: 'Caption',
      dataType: 'DataType',
      dimensionType: 'DimensionType',
      expression: 'Expression',
      expressionV2: 'ExpressionV2',
      factColumn: 'FactColumn',
      fieldDescription: 'FieldDescription',
      granularity: 'Granularity',
      refUid: 'RefUid',
      tableUniqueId: 'TableUniqueId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caption: 'string',
      dataType: 'string',
      dimensionType: 'string',
      expression: 'string',
      expressionV2: 'string',
      factColumn: 'string',
      fieldDescription: 'string',
      granularity: 'string',
      refUid: 'string',
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

