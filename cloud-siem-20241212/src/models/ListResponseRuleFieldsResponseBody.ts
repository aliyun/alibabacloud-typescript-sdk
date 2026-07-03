// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResponseRuleFieldsResponseBodyListResponseRuleFieldsRightValue extends $dara.Model {
  /**
   * @remarks
   * The right-side value.
   * 
   * @example
   * dev_selectdb_cluster
   */
  value?: string;
  /**
   * @remarks
   * The display name of the enumeration value.
   * 
   * @example
   * high
   */
  valueName?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      valueName: 'ValueName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      valueName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResponseRuleFieldsResponseBodyListResponseRuleFieldsSupportOperators extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a right-side value is required. Valid values:
   * - true: Required.
   * - false: Not required.
   * 
   * @example
   * true
   */
  hasRightValue?: string;
  /**
   * @remarks
   * The position of the operator in the operator list.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The aggregation method for the dispatch rule condition. Valid values:
   * 
   * - `=`: equal to
   * - `<>`: not equal to
   * - `in`: contains
   * - `not in`: does not contain
   * - `REGEXP`: matches the regular expression
   * - `NOT REGEXP`: does not match the regular expression
   * 
   * @example
   * BETWEEN
   */
  operator?: string;
  /**
   * @remarks
   * The display name of the operator.
   * 
   * @example
   * autotest-operator
   */
  operatorName?: string;
  /**
   * @remarks
   * The data types supported by the current operator, separated by commas.
   * 
   * @example
   * ip
   */
  supportDataType?: string;
  static names(): { [key: string]: string } {
    return {
      hasRightValue: 'HasRightValue',
      index: 'Index',
      operator: 'Operator',
      operatorName: 'OperatorName',
      supportDataType: 'SupportDataType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasRightValue: 'string',
      index: 'number',
      operator: 'string',
      operatorName: 'string',
      supportDataType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResponseRuleFieldsResponseBodyListResponseRuleFields extends $dara.Model {
  /**
   * @remarks
   * The data type of the automated response rule condition field.
   * 
   * @example
   * ip
   */
  dataType?: string;
  /**
   * @remarks
   * The whitelisted field.
   * 
   * @example
   * appname
   */
  field?: string;
  /**
   * @remarks
   * The name of the rule field.
   * 
   * @example
   * OriginIP,ConsoleLog,CPUTime,Duration,ErrorCode,ErrorMessage,ResponseSize,ResponseStatus,RoutineName,ClientRequestID,LogTimestamp,FetchStatus,SubRequestID
   */
  fieldName?: string;
  /**
   * @remarks
   * The normalization object type to which the field belongs.
   * 
   * @example
   * alert
   */
  fieldNormalization?: string;
  /**
   * @remarks
   * The list of optional enumeration values for the field. This parameter is not returned if no enumeration values are available.
   */
  rightValue?: ListResponseRuleFieldsResponseBodyListResponseRuleFieldsRightValue[];
  /**
   * @remarks
   * The English descriptions of the operators.
   */
  supportOperators?: ListResponseRuleFieldsResponseBodyListResponseRuleFieldsSupportOperators[];
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      field: 'Field',
      fieldName: 'FieldName',
      fieldNormalization: 'FieldNormalization',
      rightValue: 'RightValue',
      supportOperators: 'SupportOperators',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      field: 'string',
      fieldName: 'string',
      fieldNormalization: 'string',
      rightValue: { 'type': 'array', 'itemType': ListResponseRuleFieldsResponseBodyListResponseRuleFieldsRightValue },
      supportOperators: { 'type': 'array', 'itemType': ListResponseRuleFieldsResponseBodyListResponseRuleFieldsSupportOperators },
    };
  }

  validate() {
    if(Array.isArray(this.rightValue)) {
      $dara.Model.validateArray(this.rightValue);
    }
    if(Array.isArray(this.supportOperators)) {
      $dara.Model.validateArray(this.supportOperators);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResponseRuleFieldsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of response rule fields.
   */
  listResponseRuleFields?: ListResponseRuleFieldsResponseBodyListResponseRuleFields[];
  /**
   * @remarks
   * The maximum number of entries to return in this request.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next query. Valid values: leave this parameter empty for the first query or if no more results exist. If a next query exists, set this parameter to the NextToken value returned by the previous API call.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      listResponseRuleFields: 'ListResponseRuleFields',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listResponseRuleFields: { 'type': 'array', 'itemType': ListResponseRuleFieldsResponseBodyListResponseRuleFields },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.listResponseRuleFields)) {
      $dara.Model.validateArray(this.listResponseRuleFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

