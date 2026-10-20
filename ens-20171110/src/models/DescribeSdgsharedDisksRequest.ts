// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSDGSharedDisksRequest extends $dara.Model {
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The page number for paging in a paged query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou-xx
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the SDG. You can call the DescribeSDGs operation to query the IDs of existing SDGs. To create an SDG, call the CreateSDG and SaveSDG operations in sequence after the AIC instance is running.
   * 
   * This parameter is required.
   * 
   * @example
   * sdg-xxxx
   */
  sdgId?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sdgId: 'SdgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      sdgId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

