// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregateAccountComplianceByPackRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  aggregatorId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  compliancePackId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      compliancePackId: 'CompliancePackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      compliancePackId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

