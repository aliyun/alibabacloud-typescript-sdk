// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModelOperatorUsageShrinkRequest extends $dara.Model {
  apiKeyIdsShrink?: string;
  /**
   * @example
   * 2026-06-02T00:00Z
   */
  endTime?: string;
  /**
   * @example
   * model
   */
  groupBy?: string;
  keysShrink?: string;
  modelNamesShrink?: string;
  /**
   * @example
   * 1
   */
  period?: number;
  /**
   * @example
   * 2026-06-01T00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyIdsShrink: 'ApiKeyIds',
      endTime: 'EndTime',
      groupBy: 'GroupBy',
      keysShrink: 'Keys',
      modelNamesShrink: 'ModelNames',
      period: 'Period',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyIdsShrink: 'string',
      endTime: 'string',
      groupBy: 'string',
      keysShrink: 'string',
      modelNamesShrink: 'string',
      period: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

