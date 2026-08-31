// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityArchiveTableProgressRequest extends $dara.Model {
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The asynchronous task progress ID returned by the UpsertQualityArchiveTable operation.
   * 
   * This parameter is required.
   * 
   * @example
   * d78f0b5c9a1e4f2ab3c6d5e4f7a8b9c0
   */
  progressId?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      progressId: 'ProgressId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
      progressId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

