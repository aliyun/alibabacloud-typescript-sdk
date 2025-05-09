// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAbacAuthorizationsRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 12****
   */
  policyId?: string;
  /**
   * @example
   * USER_DEFINE
   */
  policySource?: string;
  /**
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policyId: 'PolicyId',
      policySource: 'PolicySource',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      policyId: 'string',
      policySource: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

