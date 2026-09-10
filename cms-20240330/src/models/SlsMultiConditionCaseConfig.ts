// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SlsMultiConditionCaseConfig extends $dara.Model {
  /**
   * @remarks
   * The match expression (corresponds to V1 condition, preserved as-is without structured parsing).
   * 
   * @example
   * Sample value
   */
  condition?: string;
  /**
   * @remarks
   * The count match expression (corresponds to V1 countCondition, preserved as-is without structured parsing).
   * 
   * @example
   * Sample value
   */
  countCondition?: string;
  /**
   * @remarks
   * **[Deprecated]** The write path is disabled. Use countCondition instead.
   * 
   * @example
   * GTE
   * 
   * @deprecated
   */
  countOperator?: string;
  /**
   * @remarks
   * **[Deprecated]** The write path is disabled. Use countCondition instead.
   * 
   * @example
   * 100
   * 
   * @deprecated
   */
  countThreshold?: number;
  /**
   * @remarks
   * **[Deprecated]** The write path is disabled. Use condition instead.
   * 
   * @example
   * Sample value
   * 
   * @deprecated
   */
  matchField?: string;
  /**
   * @remarks
   * **[Deprecated]** The write path is disabled. Use condition instead.
   * 
   * @example
   * PRESENT
   * 
   * @deprecated
   */
  matchOperator?: string;
  /**
   * @remarks
   * **[Deprecated]** The write path is disabled. Use condition instead.
   * 
   * @example
   * Sample value
   * 
   * @deprecated
   */
  matchValue?: string;
  /**
   * @remarks
   * The detection operator (aligned with V1 caseList.type): HAS_DATA / HAS_DATA_COUNT / HAS_DATA_MATCH / HAS_DATA_MATCH_COUNT.
   * 
   * @example
   * HAS_DATA
   */
  operator?: string;
  /**
   * @remarks
   * **[Deprecated]** The write path is disabled. Use condition instead.
   * 
   * @example
   * Sample value
   * 
   * @deprecated
   */
  rawCondition?: string;
  /**
   * @remarks
   * The severity level (corresponds to V1 level).
   * 
   * @example
   * INFO
   */
  severity?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      countCondition: 'countCondition',
      countOperator: 'countOperator',
      countThreshold: 'countThreshold',
      matchField: 'matchField',
      matchOperator: 'matchOperator',
      matchValue: 'matchValue',
      operator: 'operator',
      rawCondition: 'rawCondition',
      severity: 'severity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      countCondition: 'string',
      countOperator: 'string',
      countThreshold: 'number',
      matchField: 'string',
      matchOperator: 'string',
      matchValue: 'string',
      operator: 'string',
      rawCondition: 'string',
      severity: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

