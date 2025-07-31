// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLatestSubmitDetailRequestSubmitDetailQuery extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  objectId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MAX_COMPUTE_SQL
   */
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      objectId: 'ObjectId',
      objectType: 'ObjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectId: 'string',
      objectType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLatestSubmitDetailRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  submitDetailQuery?: GetLatestSubmitDetailRequestSubmitDetailQuery;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      submitDetailQuery: 'SubmitDetailQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      submitDetailQuery: GetLatestSubmitDetailRequestSubmitDetailQuery,
    };
  }

  validate() {
    if(this.submitDetailQuery && typeof (this.submitDetailQuery as any).validate === 'function') {
      (this.submitDetailQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

