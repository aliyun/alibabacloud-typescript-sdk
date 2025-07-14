// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGovernanceItemReportRequest extends $dara.Model {
  /**
   * @example
   * SSOLoginEnabled
   */
  governanceItemType?: string;
  /**
   * @example
   * EXAMPLE
   */
  marker?: string;
  /**
   * @example
   * 1000
   */
  maxItems?: string;
  static names(): { [key: string]: string } {
    return {
      governanceItemType: 'GovernanceItemType',
      marker: 'Marker',
      maxItems: 'MaxItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      governanceItemType: 'string',
      marker: 'string',
      maxItems: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

