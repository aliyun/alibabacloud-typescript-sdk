// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnifiedOriginalQuery extends $dara.Model {
  /**
   * @remarks
   * The request query.
   * 
   * @example
   * 杭州美食
   */
  query?: string;
  /**
   * @remarks
   * The publish time range.
   * 
   * @example
   * NoLimit
   */
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      query: 'query',
      timeRange: 'timeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      query: 'string',
      timeRange: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

