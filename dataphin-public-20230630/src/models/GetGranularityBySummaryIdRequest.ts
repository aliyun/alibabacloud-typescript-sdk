// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGranularityBySummaryIdRequest extends $dara.Model {
  /**
   * @remarks
   * Env
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * ModelId
   * 
   * This parameter is required.
   * 
   * @example
   * 1978
   */
  modelId?: number;
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
   * The operator ID.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * ProjectId
   * 
   * This parameter is required.
   * 
   * @example
   * 7081229106458752
   */
  projectId?: number;
  /**
   * @remarks
   * QueryDraft
   */
  queryDraft?: boolean;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      modelId: 'ModelId',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      projectId: 'ProjectId',
      queryDraft: 'QueryDraft',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      modelId: 'number',
      opTenantId: 'number',
      opUserId: 'string',
      projectId: 'number',
      queryDraft: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

