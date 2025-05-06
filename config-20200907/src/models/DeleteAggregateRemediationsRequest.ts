// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAggregateRemediationsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * For more information about how to obtain the ID of the account group, see [ListAggregators](https://help.aliyun.com/document_detail/255797.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ca-6b4a626622af0012****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The ID of the remediation template. Separate multiple remediation template IDs with commas (,).
   * 
   * For more information about how to obtain the ID of a remediation template, see [ListAggregateRemediations](https://help.aliyun.com/document_detail/270036.html).
   * 
   * This parameter is required.
   * 
   * @example
   * crr-909ba2d4716700eb****
   */
  remediationIds?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      remediationIds: 'RemediationIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      remediationIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

