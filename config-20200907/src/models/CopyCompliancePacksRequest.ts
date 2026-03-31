// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyCompliancePacksRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the destination account groups into which the compliance packages are replicated. Separate multiple account group IDs with commas (,).
   * 
   * > If this parameter is left empty, the compliance packages are replicated to the current account group.
   * 
   * @example
   * ca-c73c626622af00f8****
   */
  desAggregatorIds?: string;
  /**
   * @remarks
   * The ID of the account group to which the compliance packages belong.
   * 
   * For more information about how to obtain the ID of an account group, see [ListAggregators](https://help.aliyun.com/document_detail/255797.html).
   * 
   * @example
   * ca-05e6626622af0050****
   */
  srcAggregatorId?: string;
  /**
   * @remarks
   * The IDs of the compliance packages. Separate multiple compliance package IDs with commas (,).
   * 
   * For more information about how to obtain the ID of a compliance package, see [ListCompliancePacks](https://help.aliyun.com/document_detail/263332.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cp-4c02626622af0050****,cp-47c1626622af0050****
   */
  srcCompliancePackIds?: string;
  static names(): { [key: string]: string } {
    return {
      desAggregatorIds: 'DesAggregatorIds',
      srcAggregatorId: 'SrcAggregatorId',
      srcCompliancePackIds: 'SrcCompliancePackIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desAggregatorIds: 'string',
      srcAggregatorId: 'string',
      srcCompliancePackIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

