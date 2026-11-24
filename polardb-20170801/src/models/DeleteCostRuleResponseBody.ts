// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCostRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of model API IDs affected by the deletion.
   * 
   * @example
   * ["ma-2ze3x6i1d7g5rto28"]
   */
  affectedModelApiIds?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7E2FE3BB-C677-5FF9-9FC5-9CF364BD6BE5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the deletion was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      affectedModelApiIds: 'AffectedModelApiIds',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedModelApiIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.affectedModelApiIds)) {
      $dara.Model.validateArray(this.affectedModelApiIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

