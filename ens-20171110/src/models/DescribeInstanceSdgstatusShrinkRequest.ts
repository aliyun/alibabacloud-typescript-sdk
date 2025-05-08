// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceSDGStatusShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AIC instance.
   * 
   * This parameter is required.
   * 
   * @example
   * aic-xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The IDs of SDGs that you want to query. By default, all SDGs are queried.
   */
  SDGIdsShrink?: string;
  /**
   * @remarks
   * The deployment status of the SDG.
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      SDGIdsShrink: 'SDGIds',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      SDGIdsShrink: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

