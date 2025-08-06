// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFileIdPlayStatisByEdgeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  from?: string;
  ownerId?: string;
  pageSize?: number;
  scrollToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  to?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      ownerId: 'OwnerId',
      pageSize: 'PageSize',
      scrollToken: 'ScrollToken',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      ownerId: 'string',
      pageSize: 'number',
      scrollToken: 'string',
      to: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

