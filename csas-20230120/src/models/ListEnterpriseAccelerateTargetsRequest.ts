// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnterpriseAccelerateTargetsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eap-424ba3f47660425c
   */
  eapId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * googleapis.com
   */
  target?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      eapId: 'EapId',
      pageSize: 'PageSize',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      eapId: 'string',
      pageSize: 'number',
      target: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

