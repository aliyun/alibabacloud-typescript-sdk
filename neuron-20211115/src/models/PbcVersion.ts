// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PbcVersion extends $dara.Model {
  /**
   * @example
   * 1
   */
  companyId?: number;
  /**
   * @example
   * 企业服务团队
   */
  companyName?: string;
  /**
   * @example
   * 1
   */
  developerId?: number;
  /**
   * @example
   * 1
   */
  id?: number;
  isWatched?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * product
   */
  name?: string;
  pbcId?: number;
  requestId?: string;
  /**
   * @example
   * 1
   */
  reviewId?: number;
  /**
   * @example
   * DEVELOPING
   */
  status?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SPEC
   */
  stepStatus?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * \"2022-04-01\"
   */
  version?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PUBLIC
   */
  visibilityLevel?: string;
  static names(): { [key: string]: string } {
    return {
      companyId: 'companyId',
      companyName: 'companyName',
      developerId: 'developerId',
      id: 'id',
      isWatched: 'isWatched',
      name: 'name',
      pbcId: 'pbcId',
      requestId: 'requestId',
      reviewId: 'reviewId',
      status: 'status',
      stepStatus: 'stepStatus',
      version: 'version',
      visibilityLevel: 'visibilityLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyId: 'number',
      companyName: 'string',
      developerId: 'number',
      id: 'number',
      isWatched: 'boolean',
      name: 'string',
      pbcId: 'number',
      requestId: 'string',
      reviewId: 'number',
      status: 'string',
      stepStatus: 'string',
      version: 'string',
      visibilityLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

