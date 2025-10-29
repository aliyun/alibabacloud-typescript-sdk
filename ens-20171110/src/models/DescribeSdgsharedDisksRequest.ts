// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSDGSharedDisksRequest extends $dara.Model {
  /**
   * @example
   * default
   */
  namespace?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * cn-hangzhou-xx
   */
  regionId?: string;
  /**
   * @remarks
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

