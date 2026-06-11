// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SmartqQueryAbilityResponseBodyResultMetaType extends $dara.Model {
  /**
   * @remarks
   * The name of the column tuple.
   * 
   * @example
   * Polar***STPS
   */
  key?: string;
  /**
   * @remarks
   * The type of the metadata. Valid values:
   * 
   * - Dimension
   * 
   * - Measure
   * 
   * @example
   * Dimension
   * 
   * **if can be null:**
   * true
   */
  type?: string;
  /**
   * @remarks
   * The type of the column tuple.
   * 
   * @example
   * string
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmartqQueryAbilityResponseBodyResultValues extends $dara.Model {
  /**
   * @remarks
   * The data values in a row.
   * 
   * **if can be null:**
   * true
   */
  row?: string[];
  static names(): { [key: string]: string } {
    return {
      row: 'Row',
    };
  }

  static types(): { [key: string]: any } {
    return {
      row: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.row)) {
      $dara.Model.validateArray(this.row);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmartqQueryAbilityResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The recommended chart type.
   * 
   * @example
   * NEW_TABLE
   */
  chartType?: string;
  /**
   * @remarks
   * The summary.
   * 
   * @example
   * test
   * 
   * **if can be null:**
   * true
   */
  conclusionText?: string;
  /**
   * @remarks
   * The list of data that is returned only in multi-step scenarios. Each element corresponds to a set of chart data.
   */
  dataList?: string[];
  /**
   * @remarks
   * The visual logical SQL statement.
   * 
   * @example
   * select * ****
   */
  logicSql?: string;
  /**
   * @remarks
   * A list of column tuple types.
   */
  metaType?: SmartqQueryAbilityResponseBodyResultMetaType[];
  /**
   * @remarks
   * An array of data value lists.
   */
  values?: SmartqQueryAbilityResponseBodyResultValues[];
  static names(): { [key: string]: string } {
    return {
      chartType: 'ChartType',
      conclusionText: 'ConclusionText',
      dataList: 'DataList',
      logicSql: 'LogicSql',
      metaType: 'MetaType',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chartType: 'string',
      conclusionText: 'string',
      dataList: { 'type': 'array', 'itemType': 'string' },
      logicSql: 'string',
      metaType: { 'type': 'array', 'itemType': SmartqQueryAbilityResponseBodyResultMetaType },
      values: { 'type': 'array', 'itemType': SmartqQueryAbilityResponseBodyResultValues },
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    if(Array.isArray(this.metaType)) {
      $dara.Model.validateArray(this.metaType);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmartqQueryAbilityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D787E1A3-A************2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: SmartqQueryAbilityResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: SmartqQueryAbilityResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

