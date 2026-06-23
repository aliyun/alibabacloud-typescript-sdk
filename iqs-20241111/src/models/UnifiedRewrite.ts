// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnifiedRewrite extends $dara.Model {
  /**
   * @remarks
   * Indicates whether rewriting is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The rewritten timeRange.
   * 
   * @example
   * OneYear
   */
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      timeRange: 'timeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
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

