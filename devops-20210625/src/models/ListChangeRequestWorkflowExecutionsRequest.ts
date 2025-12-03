// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChangeRequestWorkflowExecutionsRequest extends $dara.Model {
  /**
   * @example
   * id
   */
  orderBy?: string;
  /**
   * @example
   * 66c0c9fffeb86b450c199fcd
   */
  organizationId?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 20
   */
  perPage?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e173f3c11db5445eb426ca33c92207c8
   */
  releaseStageSn?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ce51b31b996246ecaf874736838360b2
   */
  releaseWorkflowSn?: string;
  /**
   * @example
   * desc
   */
  sort?: string;
  static names(): { [key: string]: string } {
    return {
      orderBy: 'orderBy',
      organizationId: 'organizationId',
      page: 'page',
      perPage: 'perPage',
      releaseStageSn: 'releaseStageSn',
      releaseWorkflowSn: 'releaseWorkflowSn',
      sort: 'sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderBy: 'string',
      organizationId: 'string',
      page: 'number',
      perPage: 'number',
      releaseStageSn: 'string',
      releaseWorkflowSn: 'string',
      sort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

