// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSilencePoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query the details of a silence policy. Valid values:
   * 
   * *   `true`: Details of the silence policy are queried.
   * *   `false`: Details about notification policies are not queried.
   * 
   * @example
   * true
   */
  isDetail?: boolean;
  /**
   * @remarks
   * The name of the silence policy.
   * 
   * @example
   * silencepolicy_test
   */
  name?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      isDetail: 'IsDetail',
      name: 'Name',
      page: 'Page',
      regionId: 'RegionId',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDetail: 'boolean',
      name: 'string',
      page: 'number',
      regionId: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

