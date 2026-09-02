// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteQueryRequestAnnotationFilterConditions extends $dara.Model {
  /**
   * @remarks
   * The annotation key.
   * 
   * @example
   * answer_quality
   */
  key?: string;
  /**
   * @remarks
   * The operator.
   * 
   * @example
   * eq
   */
  operator?: string;
  /**
   * @remarks
   * The annotation value.
   * 
   * @example
   * GOOD
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      operator: 'operator',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      value: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteQueryRequestAnnotationFilter extends $dara.Model {
  /**
   * @remarks
   * The annotation filter conditions.
   */
  conditions?: ExecuteQueryRequestAnnotationFilterConditions[];
  static names(): { [key: string]: string } {
    return {
      conditions: 'conditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': ExecuteQueryRequestAnnotationFilterConditions },
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteQueryRequest extends $dara.Model {
  /**
   * @remarks
   * The annotation filter.
   */
  annotationFilter?: ExecuteQueryRequestAnnotationFilter;
  /**
   * @remarks
   * The start time of the query.
   * 
   * @example
   * 1760925728
   */
  from?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 100
   */
  length?: number;
  /**
   * @remarks
   * The maximum output length.
   * 
   * @example
   * 100
   */
  maxOutputLength?: number;
  /**
   * @remarks
   * The pagination offset.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The query entered by the user.
   * 
   * This parameter is required.
   * 
   * @example
   * select count(*) from product_faq_dataset
   */
  query?: string;
  /**
   * @remarks
   * The end time of the query.
   * 
   * @example
   * 1760925788
   */
  to?: number;
  /**
   * @remarks
   * The statement type. Currently, only SQL is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * SQL
   */
  type?: string;
  /**
   * @remarks
   * The dataset version.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      annotationFilter: 'annotationFilter',
      from: 'from',
      length: 'length',
      maxOutputLength: 'maxOutputLength',
      offset: 'offset',
      query: 'query',
      to: 'to',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotationFilter: ExecuteQueryRequestAnnotationFilter,
      from: 'number',
      length: 'number',
      maxOutputLength: 'number',
      offset: 'number',
      query: 'string',
      to: 'number',
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.annotationFilter && typeof (this.annotationFilter as any).validate === 'function') {
      (this.annotationFilter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

