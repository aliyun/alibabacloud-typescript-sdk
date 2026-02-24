// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyCompliancePacksRequest extends $dara.Model {
  desAggregatorIds?: string;
  srcAggregatorId?: string;
  /**
   * @remarks
   * This parameter is required.
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

