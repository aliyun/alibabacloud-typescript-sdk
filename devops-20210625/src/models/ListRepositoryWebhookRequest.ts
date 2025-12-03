// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepositoryWebhookRequest extends $dara.Model {
  accessToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  organizationId?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      organizationId: 'organizationId',
      page: 'page',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      page: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

