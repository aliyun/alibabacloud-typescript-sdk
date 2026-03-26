// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableInsightRequest extends $dara.Model {
  /**
   * @example
   * IpInsight
   */
  insightType?: string;
  static names(): { [key: string]: string } {
    return {
      insightType: 'InsightType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      insightType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

