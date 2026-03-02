// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeploymentsShrinkRequest extends $dara.Model {
  excludeStatusShrink?: string;
  orderBy?: string;
  orderDirection?: string;
  pageNumber?: number;
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  serviceGroupId?: number;
  statusShrink?: string;
  static names(): { [key: string]: string } {
    return {
      excludeStatusShrink: 'excludeStatus',
      orderBy: 'orderBy',
      orderDirection: 'orderDirection',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      serviceGroupId: 'serviceGroupId',
      statusShrink: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeStatusShrink: 'string',
      orderBy: 'string',
      orderDirection: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      serviceGroupId: 'number',
      statusShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

